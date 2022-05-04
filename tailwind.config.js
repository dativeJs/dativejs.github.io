var colors = require("tailwindcss/colors");
var plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./*.html",
    "./guide/*.html",
    "./teams/*.html",
    "./api/*.html",
    "./migration/*.html",
    "./src/index.js",
    "./src/**/*.{html,js}",
    "./Repl/*.{html,js}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        dative: "#ff3a10",
        ...colors,
        nav: {
          50: "#E1ECFE",
          100: "#BED7FD",
          200: "#83B1FC",
          300: "#4289FA",
          400: "#0763F8",
          500: "#0549B7",
          600: "#043C95",
          700: "#032C6D",
          800: "#021E4A",
          900: "#010E23",
        },
      },
      fontFamily: {
        poppins_semibold: ["poppins-semibold"],
        poppins_medium: ["poppins-medium"],
        poppins_regular: ["poppins-regular"],
        poppins_light: ["poppins-light"],
      },
      boxShadow: {
        neon: " 0px 0px 300px 199px rgba(102,46,255,1)",
      },
      backgroundImage: {
        home: "url('/public/galaxystarfield.png')",
        mesh: "url('/public/mesh.png')",
        earthbump1k: "url('/public/earthbump1k.jpg')",
      },
      zIndex: {
        1000: "1000",
      },
      keyframes: {
        slideInLeft: {
          from: {
            transform: "translate3d(-100%, 0, 0)",
            visibility: "visible",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".neo": {
          boxShadow: theme("boxShadow.neon"),
        },
        ".main-back": {
          background: "linear-gradient(to top left, #111, #fbd99e)",
        },
        ".neon": {
          background: "transparent",
          "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
          "backdrop-filter": "blur(20px)",
          "-webkit-backdrop-filter": "blur(20px)",
          border: "1px solid transparent",
        },
        ".msg-glass": {
          background: "transparent",
          "box-shadow": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          "backdrop-filter": "blur(4px)",
          "-webkit-backdrop-filter": "blur(4px)",
          "border-radius": "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        },
      });
    }),
  ],
};
