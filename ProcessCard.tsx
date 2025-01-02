import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  icon,
  title,
  description,
  features,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ translateY: -10 }}
      className="relative group"
    >
      {/* 3D Card Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 h-full transform transition-transform duration-500 hover:scale-[1.02]">
        {/* Step number */}
        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-sm font-medium">
          {index + 1}
        </div>

        {/* Icon with glow effect */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-accent-purple/20 blur-2xl" />
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="relative w-16 h-16 rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 flex items-center justify-center"
          >
            {icon}
          </motion.div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-accent-purple" />
              </div>
              <span className="text-sm text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default ProcessCard;