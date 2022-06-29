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
    scaleX: 0.8,
    scaleY: 0.8,
  },

  whileInView: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    translateY: -20,
  }
}
