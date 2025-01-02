import React from 'react';
import { motion } from 'framer-motion';

const PremiumBackground = () => {
  // Reduced number of elements and simplified animations
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary to-background-secondary" />

      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(139,92,246,0.15), transparent 70%)',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
        animate={{
          x: ['-25%', '25%'],
          y: ['-25%', '25%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
        animate={{
          x: ['25%', '-25%'],
          y: ['25%', '-25%'],
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

export default React.memo(PremiumBackground);