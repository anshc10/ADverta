import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GradientText from '../ui/GradientText';
import GlowingButton from '../ui/GlowingButton';
import ParticleField from '../effects/ParticleField';
import FloatingIcons from '../effects/FloatingIcons';
import { useScrollAnimation } from '../../utils/animations';

const Header: React.FC = () => {
  const [ref, controls] = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <motion.header
      ref={ref}
      initial="hidden"
      animate={controls}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleField />
      <FloatingIcons />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Transform Your Vision with{' '}
              <GradientText>Next-Gen AI</GradientText>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Unleash the power of artificial intelligence to revolutionize your business 
            processes and achieve unprecedented growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <GlowingButton
              onClick={() => navigate('/contact')}
              glowColor="var(--accent-pink)"
            >
              Get Started
            </GlowingButton>
            <GlowingButton
              onClick={() => navigate('/schedule')}
              className="bg-background-secondary !bg-none border border-accent-purple/30"
              glowColor="var(--accent-blue)"
            >
              Schedule Demo
            </GlowingButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;