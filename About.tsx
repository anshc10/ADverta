import React from 'react';
import { motion } from 'framer-motion';
import GradientText from '../components/ui/GradientText';
import AboutContent from '../components/sections/about/AboutContent';
import AboutStats from '../components/sections/about/AboutStats';
import TestimonialSection from '../components/sections/home/TestimonialSection';
import BlogSection from '../components/sections/home/BlogSection';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <GradientText>ADverta</GradientText>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming digital marketing through intelligent automation and proven strategies 
              that deliver measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      <AboutContent />
      <AboutStats />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
};

export default About;