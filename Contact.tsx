import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-background-secondary rounded-lg border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-background-secondary rounded-lg border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 bg-background-secondary rounded-lg border border-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-accent-purple rounded-lg hover:bg-accent-purple/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;