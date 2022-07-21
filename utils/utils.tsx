

export const delay = {
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  initial: {
    opacity: 0,
  },
};
export const section = {
  initial: {
    scale: 0.9,
    opacity: 0.5,
  },

  whileInView: {
    scale: 1,
    translateY: -10,
    transition: {
    }
  }
}
export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};