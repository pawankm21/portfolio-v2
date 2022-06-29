export const delayVariant = {
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
export const sectionVariant = {
  initial: {
    opacity: 0,
  },

  whileInView: {
    opacity: 1,
    translateY: -20,
    transition: {
      delay: 0.5,
    }
  }
}
