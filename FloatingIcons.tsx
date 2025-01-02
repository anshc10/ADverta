import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Target, LineChart, Zap, Network } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Brain, color: "text-accent-blue", delay: 0 },
    { Icon: Target, color: "text-accent-purple", delay: 0.5 },
    { Icon: Cpu, color: "text-accent-pink", delay: 1 },
    { Icon: Network, color: "text-accent-blue", delay: 1.5 },
    { Icon: LineChart, color: "text-accent-purple", delay: 2 },
    { Icon: Zap, color: "text-accent-pink", delay: 2.5 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20`}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
            rotate: 0
          }}
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;