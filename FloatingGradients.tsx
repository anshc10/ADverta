import React from 'react';
import { motion } from 'framer-motion';

const FloatingGradients = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(139,92,246,0.3), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: ['-25%', '25%', '-25%'],
          y: ['-25%', '25%', '-25%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Secondary gradient */}
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(59,130,246,0.3), transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: ['25%', '-25%', '25%'],
          y: ['25%', '-25%', '25%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
      />
    </div>
  );
};

export default FloatingGradients;