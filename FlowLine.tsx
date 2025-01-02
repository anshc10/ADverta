import React from 'react';
import { motion } from 'framer-motion';

const FlowLine = () => {
  return (
    <div className="relative w-full h-0.5">
      {/* Static line */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-pink/20" />

      {/* Animated flow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-pink"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />

      {/* Flowing particles */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent-purple/20 blur-sm"
        animate={{
          x: ['0%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default FlowLine;