import React from 'react';
import { motion } from 'framer-motion';
import DemoScheduler from '../components/calendar/DemoScheduler';
import GradientText from '../components/ui/GradientText';
import { fadeInUp } from '../styles/animations';
import AnimatedGradientBlob from '../components/effects/AnimatedGradientBlob';

const Schedule = () => {
  return (
    <div className="relative min-h-screen pt-20 pb-16">
      {/* Background Effects */}
      <AnimatedGradientBlob />
      
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            Schedule Your <GradientText>Personalized Demo</GradientText>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose a convenient time for a personalized walkthrough of our AI-powered solutions. 
            Our expert will demonstrate key features and answer your questions.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="bg-background-secondary rounded-lg shadow-xl overflow-hidden border border-accent-purple/10"
        >
          <DemoScheduler />
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;