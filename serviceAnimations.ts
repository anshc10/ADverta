export const serviceCardAnimations = {
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  },
  icon: {
    hidden: { rotate: 0 },
    visible: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  }
};