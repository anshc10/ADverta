import React from 'react';
import { motion } from 'framer-motion';

const EnhancedGradientBlob = () => {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Primary gradient blob */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(236,72,153,0.1))',
            'radial-gradient(circle at 70% 70%, rgba(236,72,153,0.3), rgba(59,130,246,0.2), rgba(139,92,246,0.1))',
            'radial-gradient(circle at 30% 30%, rgba(139,92,246,0.3), rgba(236,72,153,0.2), rgba(59,130,246,0.1))'
          ],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Secondary gradient blob */}
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle at 70% 70%, rgba(236,72,153,0.3), rgba(139,92,246,0.2), rgba(59,130,246,0.1))',
            'radial-gradient(circle at 30% 30%, rgba(139,92,246,0.3), rgba(236,72,153,0.2), rgba(59,130,246,0.1))',
            'radial-gradient(circle at 70% 70%, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(236,72,153,0.1))'
          ],
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default EnhancedGradientBlob;