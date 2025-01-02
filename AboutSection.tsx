import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GradientText from '../../ui/GradientText';
import GlowingButton from '../../ui/GlowingButton';
import { Brain, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-accent-blue" />,
      title: "Innovation First",
      description: "We continuously push the boundaries of what's possible with AI technology."
    },
    {
      icon: <Target className="w-8 h-8 text-accent-purple" />,
      title: "Results Driven",
      description: "Our focus is on delivering measurable outcomes and real ROI for every client."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-pink" />,
      title: "Client Success",
      description: "We're dedicated to helping our clients achieve and exceed their growth objectives."
    }
  ];

  return (
    <section className="py-20 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            About <GradientText>ADverta</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            At ADverta, we're transforming digital marketing through intelligent automation and proven 
            strategies that deliver measurable growth. As your dedicated partner in success, we combine 
            cutting-edge AI technology with human expertise to streamline your business scaling journey.
          </p>
          <GlowingButton onClick={() => navigate('/about')}>
            Learn More About Us
          </GlowingButton>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-background-secondary p-8 rounded-lg text-center border border-accent-purple/10 hover:border-accent-purple/30 transition-all"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;