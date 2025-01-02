import React from 'react';
import { motion } from 'framer-motion';
import { useRandomInterval } from '../../hooks/useRandomInterval';
import { random } from '../../utils/animations/sparkleUtils';

interface SparkleProps {
  color: string;
  size: number;
  style: React.CSSProperties;
}

const DEFAULT_COLOR = "hsl(50deg, 100%, 50%)";

const Sparkle: React.FC<SparkleProps> = ({ color = DEFAULT_COLOR, size, style }) => {
  const path = React.useMemo(() => {
    return random(1, 5);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
      style={{
        ...style,
        position: "absolute",
        pointerEvents: "none",
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={color}
          fillOpacity="0.5"
        />
      </svg>
    </motion.div>
  );
};

const Sparkles: React.FC = () => {
  const [sparkles, setSparkles] = React.useState<Array<{
    id: string;
    color: string;
    size: number;
    style: React.CSSProperties;
  }>>([]);

  useRandomInterval(
    () => {
      const sparkle = {
        id: String(Date.now()),
        color: random(0, 1) > 0.5 ? "#3B82F6" : "#8B5CF6",
        size: random(10, 20),
        style: {
          top: random(0, 100) + "%",
          left: random(0, 100) + "%",
          zIndex: 2,
        },
      };

      setSparkles(sparkles => [...sparkles, sparkle]);
      setTimeout(() => {
        setSparkles(sparkles => 
          sparkles.filter(s => s.id !== sparkle.id)
        );
      }, 750);
    },
    50,
    450
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
    </div>
  );
};

export default Sparkles;