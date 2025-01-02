import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGradientBlob = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Primary blob */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-accent-blue/30 via-accent-purple/30 to-accent-pink/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3],
          background: [
            'linear-gradient(to right, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(236,72,153,0.3))',
            'linear-gradient(to right, rgba(236,72,153,0.3), rgba(59,130,246,0.3), rgba(139,92,246,0.3))',
            'linear-gradient(to right, rgba(139,92,246,0.3), rgba(236,72,153,0.3), rgba(59,130,246,0.3))'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* Secondary blob */}
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.5, 0.3, 0.5],
          background: [
            'linear-gradient(to left, rgba(236,72,153,0.3), rgba(139,92,246,0.3), rgba(59,130,246,0.3))',
            'linear-gradient(to left, rgba(59,130,246,0.3), rgba(236,72,153,0.3), rgba(139,92,246,0.3))',
            'linear-gradient(to left, rgba(139,92,246,0.3), rgba(59,130,246,0.3), rgba(236,72,153,0.3))'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default AnimatedGradientBlob;