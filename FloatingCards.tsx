import React from 'react';
import { motion } from 'framer-motion';

interface Card {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FloatingCards: React.FC<{ cards: Card[] }> = ({ cards }) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="relative p-6 bg-background-secondary/50 backdrop-blur-xl rounded-xl border border-white/10 hover:border-accent-purple/50 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 to-transparent rounded-xl" />
          <div className="relative z-10">
            <div className="mb-4 text-accent-purple">{card.icon}</div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-400">{card.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCards;