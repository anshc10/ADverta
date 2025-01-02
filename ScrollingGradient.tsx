import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollingGradient = () => {
  const { scrollYProgress } = useScroll();

  const gradientY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary gradient */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(139,92,246,0.15), transparent 70%)',
          filter: 'blur(100px)',
          y: gradientY,
          left: '20%',
        }}
      />

      {/* Secondary gradient */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)',
          filter: 'blur(100px)',
          y: gradientY,
          right: '20%',
          top: '25%'
        }}
      />

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-background-primary/80 backdrop-blur-sm" />
    </div>
  );
};

export default ScrollingGradient;