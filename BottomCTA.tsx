import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GradientButton from '../../ui/GradientButton';
import GradientText from '../../ui/GradientText';
import { ArrowRight, Award, Shield, Users } from 'lucide-react';

const stats = [
  {
    number: "100K+",
    label: "Active Users",
    icon: <Users className="w-6 h-6 text-accent-blue" />
  },
  {
    number: "99.9%",
    label: "Uptime",
    icon: <Shield className="w-6 h-6 text-accent-purple" />
  },
  {
    number: "50M+",
    label: "Leads Generated",
    icon: <Award className="w-6 h-6 text-accent-pink" />
  }
];

const BottomCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background-secondary/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to <GradientText>Transform</GradientText> Your Lead Generation?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of businesses already using ADverta to revolutionize their growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-secondary p-6 rounded-lg border border-accent-purple/10 text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GradientButton
            onClick={() => navigate('/contact')}
            className="group"
          >
            <span className="flex items-center">
              Start Generating Leads
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;