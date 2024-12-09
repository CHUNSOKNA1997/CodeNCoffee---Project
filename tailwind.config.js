/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        extendblack: "#353A40",
        extendGrayOpA: "rgba(145, 165, 167, 0.3)",
        extendBlue: "#5E68E6",
        extendOrange: "#CD873C",
        bgBlur: "rgba(53, 58, 64, 0.5)",
        rgba: "rgba(0, 0, 0, 0.4)",
        whiteTranparent: "rgba(255, 255, 255, 0.1)",
        softWhite: "rgba(245, 245, 245, 1)",
        softWhiteTran: "rgba(245, 245, 245, 0.7)",
        lightgreen: "rgb(72, 207, 203)",
        darkGreen: "rgb(34, 151, 153)",
        lightGray: "rgb(66, 66, 66)",
        softRed: "#D91656",
      },
    },
  },
  plugins: [],
};
