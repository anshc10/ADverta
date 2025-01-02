import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../../ui/GradientText';
import { fadeInUp } from '../../../styles/animations';

const AboutHero = () => {
  return (
    <section className="relative pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <GradientText>ADverta</GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between cutting-edge AI technology and practical business solutions. 
            We're transforming how businesses approach lead generation and automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;