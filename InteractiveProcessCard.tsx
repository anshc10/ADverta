import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface InteractiveProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const InteractiveProcessCard: React.FC<InteractiveProcessCardProps> = ({
  icon,
  title,
  description,
  features,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* 3D transformation on hover */}
      <motion.div
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          z: isHovered ? 50 : 0
        }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 h-full"
      >
        {/* Floating number indicator */}
        <motion.div
          animate={{
            y: isHovered ? -20 : 0,
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.4
          }}
          className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-xl font-bold"
        >
          {index + 1}
        </motion.div>

        {/* Icon with dynamic glow */}
        <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-accent-purple/20 blur-2xl"
          />
          <div className="relative w-16 h-16 rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Content with animated reveal */}
        <motion.div
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-400 mb-6">{description}</p>

          {/* Features with staggered animation */}
          <div className="space-y-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1,
                    rotate: isHovered ? [0, 180, 360] : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-accent-purple" />
                </motion.div>
                <span className="text-sm text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive gradient overlay */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0
          }}
          className="absolute inset-0 bg-gradient-to-b from-accent-purple/20 via-accent-blue/20 to-transparent rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default InteractiveProcessCard;