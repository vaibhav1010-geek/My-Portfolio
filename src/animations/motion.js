export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
