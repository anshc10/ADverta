export const buttonAnimations = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98
  },
  glow: {
    hidden: {
      opacity: 0
    },
    hover: {
      opacity: 0.1,
      transition: {
        duration: 0.3
      }
    }
  }
};