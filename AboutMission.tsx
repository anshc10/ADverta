import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../../ui/GradientText';

const AboutMission = () => {
  return (
    <section className="py-16 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our <GradientText>Mission</GradientText></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to revolutionize how businesses grow by bridging the gap between cutting-edge AI technology and practical business solutions. Our goal is to make advanced lead generation and automation accessible to businesses of all sizes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMission;