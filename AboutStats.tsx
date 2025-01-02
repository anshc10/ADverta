import React from 'react';
import { motion } from 'framer-motion';
import { aboutStats } from '../../../data/about';

const AboutStats = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-secondary p-6 rounded-lg border border-accent-purple/10 hover:border-accent-purple/30 transition-all"
            >
              <div className="text-2xl font-bold text-accent-blue">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;