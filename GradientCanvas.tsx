import React, { useEffect, useRef, useMemo } from 'react';

const GradientCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Memoize gradient colors
  const colors = useMemo(() => ({
    start: 'rgba(139, 92, 246, 0.1)',
    end: 'rgba(59, 130, 246, 0.1)'
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Use requestIdleCallback for non-critical animations
    const animate = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      time += 0.005; // Reduced animation speed
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, colors.start);
      gradient.addColorStop(1, colors.end);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 opacity-30"
      style={{ willChange: 'transform' }}
    />
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(GradientCanvas);