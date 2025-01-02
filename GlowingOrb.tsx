import React from 'react';
import { motion } from 'framer-motion';

const GlowingOrb = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-accent-purple/20 blur-[100px]"
        animate={{
          x: ['-25%', '25%'],
          y: ['-25%', '25%'],
          scale: [0.8, 1.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute right-0 w-[500px] h-[500px] rounded-full bg-accent-blue/20 blur-[100px]"
        animate={{
          x: ['25%', '-25%'],
          y: ['25%', '-25%'],
          scale: [1.2, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default GlowingOrb;