import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Filter, CheckCircle } from 'lucide-react';
import GradientText from '../../components/ui/GradientText';
import GlowingButton from '../../components/ui/GlowingButton';
import ServiceHeader from '../../components/services/ServiceHeader';
import FeatureCard from '../../components/services/FeatureCard';
import AnimatedGradientBlob from '../../components/effects/AnimatedGradientBlob';

const LeadGeneration = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-accent-blue" />,
      title: "Tailored Leads",
      description: "We connect you with homeowners and businesses actively looking for your services."
    },
    {
      icon: <Users className="w-8 h-8 text-accent-purple" />,
      title: "No Shared Leads",
      description: "The leads we generate are yours and yours alone—no competing with others."
    },
    {
      icon: <Filter className="w-8 h-8 text-accent-pink" />,
      title: "Smart Campaigns",
      description: "We design ads that work, targeting the right people at the right time."
    }
  ];

  const benefits = [
    "Know exactly where your leads are coming from",
    "Continuously fine-tuned campaigns for optimal results",
    "Never deal with cold leads that waste your time",
    "Get exclusive access to high-intent prospects",
    "Track and measure ROI in real-time",
    "Scale your business with predictable lead flow"
  ];

  return (
    <div className="relative min-h-screen pt-20">
      <AnimatedGradientBlob />
      
      <div className="max-w-7xl mx-auto px-4">
        <ServiceHeader
          title="Get the Right Projects, Not Just Any Leads"
          description="We focus on delivering exclusive, high-quality leads that match your business needs—so you can spend less time chasing and more time growing."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-background-secondary p-8 rounded-lg border border-accent-purple/10 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Why It Matters</h2>
          <p className="text-gray-300 mb-8">
            We get it—chasing leads is exhausting, especially when most of them don't go anywhere. 
            That's why we focus on quality over quantity. By delivering exclusive leads, we help you 
            stay ahead of your competition and focus on what you do best.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-accent-purple" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <GlowingButton onClick={() => window.location.href = '/contact'}>
            Ready to grow your business? Let's talk
          </GlowingButton>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadGeneration;