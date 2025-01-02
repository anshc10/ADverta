import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GradientText from '../../ui/GradientText';
import GlassButton from '../../ui/GlassButton';
import GlowingSphere from '../../effects/GlowingSphere';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium background effects */}
      <GlowingSphere />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
              <GradientText>Automate Growth</GradientText> with{' '}
              <br className="hidden md:block" />
              Exclusive Leads and AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We help home service businesses scale with consistent projects and time-saving automation tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <GlassButton 
              onClick={() => navigate('/contact')}
              variant="primary"
              size="lg"
              className="min-w-[200px]"
            >
              Get Started
            </GlassButton>
            <GlassButton
              onClick={() => navigate('/schedule')}
              variant="secondary"
              size="lg"
              className="min-w-[200px]"
            >
              Watch Demo
            </GlassButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;