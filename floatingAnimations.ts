export const floatingElementsAnimation = {
  hidden: (delay: number) => ({
    opacity: 0,
    y: 20,
    scale: 0.8,
  }),
  visible: (delay: number) => ({
    opacity: 0.1,
    y: [0, -20, 0],
    scale: 1,
    transition: {
      delay,
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      },
      opacity: {
        duration: 1,
      },
      scale: {
        duration: 0.8,
      }
    }
  })
};