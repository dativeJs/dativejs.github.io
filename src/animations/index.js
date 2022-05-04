export let slidein = function ({ animate, duration, delay }) {
      animate(
        [
          {
            transform: "translate3d(-100%, 0, 0)",
            visibility: "visible",
          },
          {
            transform: "translate3d(0, 0, 0)",
          },
        ],
        {
          duration,
          delay,
          easing: "ease",
        }
      );
    },
   slideright = function ({ animate, duration, delay }) {
      animate(
        [
          {
            transform: "translate3d(0,100%, 0)",
            visibility: "visible",
          },
          {
            transform: "translate3d(0, 0, 0)",
          },
        ],
        {
          duration,
          delay,
          easing: "ease",
        }
      );
};
export let fadein = function ({ animate, duration, delay }) {
      animate(
        [
          {
            transform: "translateY(-" + window.innerWidth + "px)",
            opacity: 0,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
          },
          {
            transform: "translateY(-140px)",
            opacity: 1,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
          },
          {
            transform: "translateY(-60px)",
            opacity: 1,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
          },
        ],
        {
          duration: duration,
          delay: delay,
          easing: "ease",
        }
      );
}