export const fadeRight = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
      },
    },
  };
};