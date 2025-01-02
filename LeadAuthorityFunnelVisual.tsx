import React from 'react';
import { motion } from 'framer-motion';
import { Users, Filter, Target, LineChart, Megaphone, CheckCircle } from 'lucide-react';

const funnelStages = [
  {
    icon: <Filter className="w-6 h-6 text-accent-blue" />,
    title: "Awareness",
    description: "AI-targeted advertising reaches potential customers",
    width: "w-full",
    color: "from-accent-blue/20 to-transparent"
  },
  {
    icon: <Target className="w-6 h-6 text-accent-purple" />,
    title: "Interest",
    description: "Engage with personalized content and offers",
    width: "w-[85%]",
    color: "from-accent-purple/20 to-transparent"
  },
  {
    icon: <Users className="w-6 h-6 text-accent-pink" />,
    title: "Consideration",
    description: "Build trust through authority content",
    width: "w-[70%]",
    color: "from-accent-pink/20 to-transparent"
  },
  {
    icon: <Megaphone className="w-6 h-6 text-accent-blue" />,
    title: "Intent",
    description: "Demonstrate value and overcome objections",
    width: "w-[55%]",
    color: "from-accent-blue/20 to-transparent"
  },
  {
    icon: <LineChart className="w-6 h-6 text-accent-purple" />,
    title: "Evaluation",
    description: "Present compelling case studies and social proof",
    width: "w-[40%]",
    color: "from-accent-purple/20 to-transparent"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-accent-pink" />,
    title: "Conversion",
    description: "Convert leads into loyal customers",
    width: "w-[25%]",
    color: "from-accent-pink/20 to-transparent"
  }
];

const LeadAuthorityFunnelVisual = () => {
  return (
    <div className="py-12">
      <div className="relative max-w-3xl mx-auto">
        {funnelStages.map((stage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`
              relative mx-auto mb-4 p-6
              ${stage.width}
              bg-gradient-to-b ${stage.color}
              rounded-lg border border-white/10
              transform hover:scale-105 transition-transform duration-300
            `}
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-background-secondary">
                {stage.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg">{stage.title}</h3>
                <p className="text-sm text-gray-400">{stage.description}</p>
              </div>
            </div>
            {index < funnelStages.length - 1 && (
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-accent-purple/30" />
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeadAuthorityFunnelVisual;