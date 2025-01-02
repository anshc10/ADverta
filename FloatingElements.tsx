import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElement {
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const FloatingElements = () => {
  const elements: FloatingElement[] = [
    { x: '20%', y: '20%', size: 4, delay: 0, duration: 8, color: 'accent-purple' },
    { x: '80%', y: '15%', size: 6, delay: 1, duration: 12, color: 'accent-blue' },
    { x: '40%', y: '80%', size: 8, delay: 2, duration: 10, color: 'accent-purple' },
    { x: '70%', y: '60%', size: 5, delay: 3, duration: 9, color: 'accent-blue' },
    { x: '10%', y: '50%', size: 7, delay: 4, duration: 11, color: 'accent-purple' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-${element.color}/20 blur-xl`}
          style={{
            left: element.x,
            top: element.y,
            width: `${element.size}rem`,
            height: `${element.size}rem`,
          }}
          animate={{
            y: ['-20px', '20px', '-20px'],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;