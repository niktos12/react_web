module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'final':{'max': '370px'},
      'xxs':{'max': '426px'},
      'special-fo':{'max': '768px' , 'min' : '427px'},

      'xss': {'max': '490px'},

      'xs': {'max': '589px'},

      's': {'max': '684px'},

      'sm': {'max': '768px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'max': '900px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'max': '1059px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'max': '1439px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1440px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

