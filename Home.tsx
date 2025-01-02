import React from 'react';
import Hero from '../components/sections/home/Hero';
import ServicesSection from '../components/sections/home/ServicesSection';
import ValueProposition from '../components/sections/home/ValueProposition';
import ProcessSection from '../components/sections/home/ProcessSection';
import SocialProof from '../components/sections/home/SocialProof';
import CtaSection from '../components/sections/home/CtaSection';
import GlowingString from '../components/effects/GlowingString';

const Home = () => {
  return (
    <div className="relative">
      {/* Glowing string effect */}
      <GlowingString />
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <ServicesSection />
        <ValueProposition />
        <ProcessSection />
        <SocialProof />
        <CtaSection />
      </div>
    </div>
  );
};

export default Home;