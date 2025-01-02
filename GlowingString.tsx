import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GlowingString = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress for various elements
  const stringY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  const glowSize = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Multiple parallel strings for depth effect */}
      <motion.div
        className="absolute left-[48%] w-[1px] h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--accent-purple), transparent)',
          boxShadow: '0 0 15px var(--accent-purple)',
          y: stringY,
          opacity: 0.3,
        }}
      />
      <motion.div
        className="absolute left-[49%] w-[1px] h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--accent-blue), transparent)',
          boxShadow: '0 0 15px var(--accent-blue)',
          y: stringY,
          opacity: 0.4,
        }}
      />
      <motion.div
        className="absolute left-[50%] w-[2px] h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--accent-purple), var(--accent-blue), transparent)',
          boxShadow: '0 0 30px var(--accent-purple)',
          y: stringY,
          opacity: glowOpacity,
        }}
      />
      <motion.div
        className="absolute left-[51%] w-[1px] h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--accent-blue), transparent)',
          boxShadow: '0 0 15px var(--accent-blue)',
          y: stringY,
          opacity: 0.4,
        }}
      />
      <motion.div
        className="absolute left-[52%] w-[1px] h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--accent-purple), transparent)',
          boxShadow: '0 0 15px var(--accent-purple)',
          y: stringY,
          opacity: 0.3,
        }}
      />

      {/* Animated orb */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          y: stringY,
          scale: glowSize,
        }}
      >
        {/* Core orb */}
        <motion.div
          className="w-6 h-6 rounded-full bg-accent-purple"
          animate={{
            boxShadow: [
              '0 0 20px var(--accent-purple), 0 0 40px var(--accent-blue)',
              '0 0 40px var(--accent-purple), 0 0 80px var(--accent-blue)',
              '0 0 20px var(--accent-purple), 0 0 40px var(--accent-blue)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Outer glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, var(--accent-purple), transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Particle effects */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 w-1 h-1 rounded-full bg-accent-purple"
          style={{
            y: stringY,
            x: `${-10 + i * 5}px`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
};

export default GlowingString;