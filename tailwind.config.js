/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "*.{html,js}",
    "./src/index.html",
    "./src/App.js",
    "./index.html"
  ],
  theme: {

    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1840px',
      },
      colors: {
        'red': '#FF0000',
        'gray': '#F8F8F8',
        'white': '#FFFFFF',
        'black' : "rgba(0, 0, 0, 0.9)",
        'gray-light': "rgba(0, 0, 0, 0.4);",
        'bg-gray':'#CECECE',
        'border-gray':'#C4C4C4',
        'text-gray':'#666666',

      },
      opacity:{
        'bg-input' : '30%',
      },

      height: {
        'header-height': '90px',
        'card-height': '565px',
        'card-image-height': '420px',
        'nav-height': '56px',
        'input-height': '50px',
        'card-content-height': '146px',
        'row-height':'60px',
        'button-height':'40px',
        'search': '34px'


      },
      width: {
        'card-width': '281px',
        'input-width': '610px',
        'button-width':'134px',
        'lg':'1506px',
        'xlg':'1920px',
        'search': '104px',



      },

      fontSize: {
        lg : ['31.9493px', {
          fontWeight: '700',
        }],
        sm: '14px',
        md: '16px',
        DEFAULT: '14px',
        base: '1rem',
        xl: '1.25rem',
      
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      }

    },
    borderRadius: {
      'none': '0',
      'sm': '8px',
      'md':'15px',
      'lg': '36px',

    },
    borderWidth: {
      '1': '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    margin: {
      'sm':'10px',
      'md':'54px',

          },
    padding: {
      'sm': "47.77px",
    },
    boxShadow: {
      'nav-shadow': '0px 2px 10px rgba(0, 0, 0, 0.02)',
      'card-shadow':'0px 2px 10px rgba(0, 0, 0, 0.05)',
      'search-button-shadow': '0px 4px 4px rgba(217, 7, 9, 0.23)'
    }
   
    
  },

  plugins: [],
}
