import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Briefcase } from 'lucide-react';

const stories = [
  {
    icon: <Building2 className="w-6 h-6 text-accent-blue" />,
    title: "Enterprise Tech Company",
    result: "Generated 250% more qualified B2B leads",
    description: "Automated prospect identification and qualification reduced sales cycle by 45 days."
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-accent-purple" />,
    title: "E-commerce Platform",
    result: "Achieved 85% reduction in lead qualification time",
    description: "ML-powered scoring system automatically identified high-value prospects."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-accent-pink" />,
    title: "Professional Services Firm",
    result: "Reduced cost per lead by 60%",
    description: "NLP-based intent detection automatically qualified leads."
  }
];

const SuccessStories = () => {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Success Stories
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-background-secondary p-6 rounded-lg border border-accent-purple/10 hover:border-accent-purple/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              {story.icon}
              <h4 className="font-semibold">{story.title}</h4>
            </div>
            <div className="text-lg font-semibold text-accent-blue mb-2">
              {story.result}
            </div>
            <p className="text-gray-400">{story.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;