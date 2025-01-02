import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, LineChart, CheckCircle } from 'lucide-react';
import GradientText from '../../components/ui/GradientText';
import GlowingButton from '../../components/ui/GlowingButton';
import ServiceHeader from '../../components/services/ServiceHeader';
import LeadAuthorityFunnel from '../../components/funnels/LeadAuthorityFunnel';
import AnimatedGradientBlob from '../../components/effects/AnimatedGradientBlob';

const LeadAuthorityFunnelPage = () => {
  const benefits = [
    "Never let quality leads slip through the cracks",
    "Build authority in your local market",
    "Convert more leads into paying customers",
    "Automate your entire sales process",
    "Track and optimize conversion rates",
    "Scale your business predictably"
  ];

  return (
    <div className="relative min-h-screen pt-20">
      <AnimatedGradientBlob />
      
      <div className="max-w-7xl mx-auto px-4">
        <ServiceHeader
          title={<>The <GradientText>Lead Authority</GradientText> Funnel</>}
          description="Transform your lead generation with our proven system that attracts, nurtures, and converts high-quality leads into loyal customers."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            How the <GradientText>Lead Authority Funnel</GradientText> Works
          </h2>
          <LeadAuthorityFunnel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-background-secondary p-8 rounded-lg border border-accent-purple/10 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Why It Matters</h2>
          <p className="text-gray-300 mb-8">
            You've probably spent money on marketing before, only to see leads slip through the cracks. 
            That's frustrating—and expensive. Our funnel ensures every lead gets the attention they 
            need to convert into a client.
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
            Start Your Lead Authority Funnel
          </GlowingButton>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadAuthorityFunnelPage;