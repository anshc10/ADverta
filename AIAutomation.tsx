import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Clock, Zap, CheckCircle } from 'lucide-react';
import GradientText from '../../components/ui/GradientText';
import GlowingButton from '../../components/ui/GlowingButton';
import ServiceHeader from '../../components/services/ServiceHeader';
import FeatureCard from '../../components/services/FeatureCard';

const AIAutomation = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-accent-blue" />,
      title: "Stay on Top of Leads",
      description: "Automated follow-ups mean you'll never leave a lead hanging."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent-purple" />,
      title: "Simplify Scheduling",
      description: "Our tools make it easy for clients to book appointments directly, without back-and-forth calls."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-pink" />,
      title: "Engage 24/7",
      description: "Whether it's answering FAQs or capturing inquiries, our chatbots and AI systems work round-the-clock."
    }
  ];

  const benefits = [
    "Save hours on manual tasks and admin work",
    "Never miss a follow-up or opportunity",
    "Streamline your entire workflow",
    "Provide instant responses to customer inquiries",
    "Track and measure everything automatically",
    "Scale operations without increasing overhead"
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <ServiceHeader
          title="Work Smarter, Not Harder, with AI-Powered Automation"
          description="From follow-ups to scheduling, we help you save time, stay organized, and never miss a lead again."
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
            Time is money—and every minute spent chasing leads or managing admin tasks is time you 
            could spend on growing your business. Automation handles the busywork so you can focus 
            on what matters most: delivering great service and closing deals.
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
          <GlowingButton onClick={() => window.location.href = '/schedule'}>
            See how automation can work for you
          </GlowingButton>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAutomation;