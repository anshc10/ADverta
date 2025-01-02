import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GradientText from '../../ui/GradientText';
import GradientButton from '../../ui/GradientButton';
import { heroAnimations } from '../../../utils/animations/heroAnimations';

const AnimatedHero = () => {
  const navigate = useNavigate();
  const { container, title, description, buttons } = heroAnimations;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-center max-w-4xl mx-auto px-4"
    >
      <motion.h1 
        variants={title}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Transform Your Lead Generation with{' '}
        <GradientText className="inline-block">
          AI-Powered Intelligence
        </GradientText>
      </motion.h1>

      <motion.p
        variants={description}
        className="text-xl text-gray-300 mb-8"
      >
        Revolutionize your lead generation process with AI technology that identifies,
        engages, and converts prospects into valuable customers.
      </motion.p>

      <motion.div
        variants={buttons}
        className="flex flex-wrap justify-center gap-4"
      >
        <GradientButton 
          onClick={() => navigate('/contact')}
          className="transform hover:scale-105 transition-transform duration-300"
        >
          Start Generating Leads
        </GradientButton>
        <GradientButton 
          variant="secondary" 
          onClick={() => navigate('/schedule')}
          className="transform hover:scale-105 transition-transform duration-300"
        >
          Schedule Demo
        </GradientButton>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHero;