import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Spotlight: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    if (!container || !spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      spotlight.style.background = `radial-gradient(
        600px circle at ${x}px ${y}px,
        rgba(176, 38, 255, 0.1),
        transparent 40%
      )`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-200"
      />
    </div>
  );
};

export default Spotlight;