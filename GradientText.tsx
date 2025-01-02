import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r animate-gradient ${className}`}
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          ${theme.colors.accent.blue},
          ${theme.colors.accent.purple},
          ${theme.colors.accent.pink}
        )`,
        backgroundSize: '300% 100%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;