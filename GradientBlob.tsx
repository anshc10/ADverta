import React from 'react';
import { motion } from 'framer-motion';

const GradientBlob = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-accent-blue/20 via-accent-purple/20 to-accent-pink/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-accent-pink/20 via-accent-purple/20 to-accent-blue/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [180, 270, 360],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default GradientBlob;