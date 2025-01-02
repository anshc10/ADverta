import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../../ui/GradientText';

const AboutStory = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2023, ADverta emerged from a clear vision: to revolutionize how businesses 
                  approach growth in the digital age. We recognized that while AI technology was advancing 
                  rapidly, many businesses struggled to harness its potential effectively.
                </p>
                <p>
                  Our journey began with a simple mission - to make advanced AI technology accessible and 
                  practical for businesses of all sizes. We focused on developing solutions that not only 
                  leverage cutting-edge AI but are also intuitive and results-driven.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Why We're <GradientText>Different</GradientText></h3>
              <p className="text-gray-300">
                At ADverta, we don't just provide tools - we deliver transformative solutions. Our unique 
                approach combines advanced AI technology with deep industry expertise, ensuring that every 
                solution we provide is tailored to drive real business growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10M+", label: "Leads Generated" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-secondary p-6 rounded-lg border border-accent-purple/10 hover:border-accent-purple/30 transition-colors"
              >
                <div className="text-2xl font-bold text-accent-blue">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;