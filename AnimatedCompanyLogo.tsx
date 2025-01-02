import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Home, Zap, Droplet, TreeDeciduous, Sparkles } from 'lucide-react';

interface AnimatedCompanyLogoProps {
  industry: string;
  name: string;
}

const AnimatedCompanyLogo: React.FC<AnimatedCompanyLogoProps> = ({ industry, name }) => {
  const getIcon = () => {
    switch (industry.toLowerCase()) {
      case 'plumbing':
        return <Droplet className="w-8 h-8" />;
      case 'hvac':
        return <Home className="w-8 h-8" />;
      case 'landscaping':
        return <TreeDeciduous className="w-8 h-8" />;
      case 'electrical':
        return <Zap className="w-8 h-8" />;
      case 'cleaning':
        return <Sparkles className="w-8 h-8" />;
      default:
        return <Wrench className="w-8 h-8" />;
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-background-secondary rounded-lg border border-accent-purple/10 hover:border-accent-purple/30 transition-all"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="text-accent-purple mb-3"
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {getIcon()}
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-xs text-gray-400">{industry}</div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCompanyLogo;