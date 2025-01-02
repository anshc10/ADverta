import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { fadeInUp } from '../../styles/animations';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center p-8"
      >
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-400">
          We've received your information and will be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={() => setSubmitted(true)}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="space-y-6 p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="New Contact Form Submission" />
      
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg bg-background-secondary border border-gray-700 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg bg-background-secondary border border-gray-700 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Company</label>
        <input
          type="text"
          name="company"
          required
          className="w-full px-4 py-2 rounded-lg bg-background-secondary border border-gray-700 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Project Requirements</label>
        <textarea
          name="requirements"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-background-secondary border border-gray-700 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Submit
      </Button>
    </motion.form>
  );
};

export default ContactForm;