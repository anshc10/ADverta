import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Cpu, LineChart } from 'lucide-react';
import GradientText from '../components/ui/GradientText';
import AnimatedGradientBlob from '../components/effects/AnimatedGradientBlob';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Target className="w-12 h-12 text-accent-blue" />,
      title: "AI-Powered Lead Generation",
      description: "Get the Right Projects, Not Just Any Leads. We focus on delivering exclusive, high-quality leads that match your business needs—so you can spend less time chasing and more time growing.",
      path: "/services/lead-generation",
      gradient: "from-accent-blue/20 to-transparent"
    },
    {
      icon: <Cpu className="w-12 h-12 text-accent-purple" />,
      title: "AI Automation for Business",
      description: "Work Smarter, Not Harder, with AI-Powered Automation. From follow-ups to scheduling, we help you save time, stay organized, and never miss a lead again.",
      path: "/services/ai-automation",
      gradient: "from-accent-purple/20 to-transparent"
    },
    {
      icon: <LineChart className="w-12 h-12 text-accent-pink" />,
      title: "Lead Authority Funnel",
      description: "Turn Interested Leads into Loyal Clients. We don't just get you leads—we create a system to guide them from inquiry to booking, effortlessly.",
      path: "/services/lead-authority-funnel",
      gradient: "from-accent-pink/20 to-transparent"
    }
  ];

  return (
    <div className="relative min-h-screen pt-20 pb-16">
      <AnimatedGradientBlob />
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <GradientText>Services</GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => navigate(service.path)}
              className="group cursor-pointer"
            >
              <div className="bg-background-secondary p-8 rounded-lg border border-accent-purple/10 hover:border-accent-purple/30 transition-all">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="p-4 rounded-lg bg-gradient-to-b border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink">
                      {service.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-4">
                      {service.description}
                    </p>
                    <span className="text-accent-purple font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                      Learn More 
                      <svg 
                        className="w-4 h-4 group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;