import React from 'react';
import { motion } from 'framer-motion';
import { trustedCompanies } from '../../../data/companies';
import AnimatedLogo from '../../logos/AnimatedLogo';

const CompanyLogos = () => {
  return (
    <section className="py-16 bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-2">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-400">
            Powering growth for home service businesses across America
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AnimatedLogo
                industry={company.industry}
                name={company.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;