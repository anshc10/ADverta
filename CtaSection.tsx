import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GradientText from '../../ui/GradientText';
import GlassButton from '../../ui/GlassButton';

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <GradientText>Transform</GradientText> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join the growing number of businesses using our AI solutions to scale their operations and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <GlassButton
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="min-w-[200px]"
            >
              Get Started Today
            </GlassButton>
            <GlassButton
              variant="secondary"
              size="lg"
              onClick={() => navigate('/schedule')}
              className="min-w-[200px]"
            >
              Schedule Demo
            </GlassButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;