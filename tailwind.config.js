/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        payBtn: 'rgb(247, 202, 0)',
        darkPayBtn: 'rgb(238, 180, 0)',
        extendblack: '#353A40',
        extendGrayOpA: 'rgba(145, 165, 167, 0.3)',
        extendBlue: '#5E68E6',
        extendOrange: '#CD873C',
        bgBlur: 'rgba(53, 58, 64, 0.5)',
        rgba: 'rgba(0, 0, 0, 0.4)',
        whiteTranparent: 'rgba(255, 255, 255, 0.1)',
        softWhite: 'rgba(245, 245, 245, 1)',
        softWhiteTran: 'rgba(245, 245, 245, 0.7)',
        lightgreen: 'rgb(72, 207, 203)',
        darkGreen: 'rgb(34, 151, 153)',
        lightGray: 'rgb(66, 66, 66)',
        softRed: '#D91656',
        deliverry: 'rgb(120, 120, 120)',
        deliverOp: 'rgb(0, 118, 0)',
        price: 'rgb(177, 39, 4)',
        upnD: 'rgb(1, 124, 182)',
        hoverUpnD: 'rgb(196, 80, 0)',
      },
    },
  },
  plugins: [],
};
