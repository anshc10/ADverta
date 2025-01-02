import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GradientText from '../../ui/GradientText';
import AnimatedButton from '../../ui/AnimatedButton';
import FloatingElements from '../../effects/FloatingElements';
import { heroAnimationsV2 } from '../../../utils/animations/heroAnimationsV2';

const AnimatedHeroV2 = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const { container, content, title, highlight, description, buttons } = heroAnimationsV2;

  return (
    <div className="relative w-full">
      <FloatingElements />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 py-20"
      >
        <motion.div
          variants={content}
          className="text-center"
        >
          <motion.div variants={title} className="relative inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your
              <motion.span variants={highlight} className="relative">
                <GradientText className="ml-3">
                  Lead Generation
                </GradientText>
                <motion.div
                  className="absolute -inset-1 bg-accent-purple/10 rounded-lg -z-10"
                  variants={highlight}
                />
              </motion.span>
              <br />
              with AI-Powered Intelligence
            </h1>
          </motion.div>

          <motion.p
            variants={description}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Revolutionize your business with AI technology that identifies,
            engages, and converts prospects into valuable customers.
          </motion.p>

          <motion.div
            variants={buttons}
            className="flex flex-wrap justify-center gap-6"
          >
            <AnimatedButton
              onClick={() => navigate('/contact')}
              variant="primary"
              whileHover={!prefersReducedMotion ? "hover" : undefined}
            >
              Start Generating Leads
            </AnimatedButton>
            <AnimatedButton
              onClick={() => navigate('/schedule')}
              variant="secondary"
              whileHover={!prefersReducedMotion ? "hover" : undefined}
            >
              Schedule Demo
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedHeroV2;