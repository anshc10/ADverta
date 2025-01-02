import { Handler } from '@netlify/functions';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const ADMIN_EMAIL = 'worksansh@gmail.com';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { form_name, ...formData } = JSON.parse(event.body!);

    // Create Notion page
    if (NOTION_DATABASE_ID) {
      await notion.pages.create({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: formData.name
                }
              }
            ]
          },
          Email: {
            email: formData.email
          },
          Company: {
            rich_text: [
              {
                text: {
                  content: formData.company
                }
              }
            ]
          },
          Type: {
            select: {
              name: form_name === 'demo' ? 'Demo Request' : 'Contact Form'
            }
          },
          Status: {
            select: {
              name: 'New'
            }
          },
          ...Object.entries(formData).reduce((acc, [key, value]) => {
            if (!['name', 'email', 'company'].includes(key)) {
              acc[key] = {
                rich_text: [
                  {
                    text: {
                      content: String(value)
                    }
                  }
                ]
              };
            }
            return acc;
          }, {})
        }
      });
    }

    // Send email notification
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: ADMIN_EMAIL }]
        }],
        from: { email: 'noreply@adverta.ai' },
        subject: `New ${form_name === 'demo' ? 'Demo Request' : 'Contact Form'} Submission`,
        content: [{
          type: 'text/html',
          value: `
            <h2>New ${form_name === 'demo' ? 'Demo Request' : 'Contact Form'} Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            ${Object.entries(formData)
              .filter(([key]) => !['name', 'email', 'company'].includes(key))
              .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
              .join('')}
          `
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email notification');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing form submission' })
    };
  }
};