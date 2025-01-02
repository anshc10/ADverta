import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none"
        >
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-gray-300 mb-6">
            In 2023, ADverta was born out of a clear mission: to simplify growth for businesses 
            struggling to keep up with outdated marketing methods and manual processes. We saw an 
            opportunity to leverage technology and innovation to help businesses work smarter, not harder.
          </p>
          <p className="text-gray-300 mb-12">
            From day one, we set out to make a difference by creating solutions that are as effective 
            as they are easy to use. With our AI automation tools and Lead Authority Funnel, we help 
            businesses focus on what matters most—serving their clients and scaling their operations—while 
            we handle the rest.
          </p>

          <h3 className="text-2xl font-bold mb-6">Why We're Different</h3>
          <p className="text-gray-300 mb-12">
            At ADverta, we're not just another marketing agency. We combine cutting-edge AI-powered 
            tools with a deep understanding of what businesses truly need to thrive. It's not about 
            just getting results; it's about delivering predictable, high-quality outcomes every time.
          </p>

          <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
          <p className="text-gray-300 mb-6">
            We're here to redefine how businesses grow by bridging the gap between technology and 
            simplicity. Whether you're looking to fill your pipeline with projects, automate repetitive 
            tasks, or build trust with clients, ADverta has you covered.
          </p>
          <p className="text-gray-300">
            In just a short time, we've already helped businesses streamline their operations, save 
            time, and achieve consistent growth—and we're just getting started.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;