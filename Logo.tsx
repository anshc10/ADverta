import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

const Logo = () => {
  return (
    <Link to="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative h-12 w-auto flex items-center"
      >
        <OptimizedImage
          src="/logo.svg"
          alt="ADverta Logo"
          width={180}
          priority={true}
          className="h-full w-auto object-contain"
        />
      </motion.div>
    </Link>
  );
};

export default Logo;