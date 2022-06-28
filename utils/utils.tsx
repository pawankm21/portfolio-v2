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
export const initialVariant = {
  animate: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: ["100%", "25%", "0%"],
    borderBottomRightRadius: ["100%", "25%", "0%"],

    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  initial: {
    width: 0,
    height: 0,
    opacity: 0,
  },
};
