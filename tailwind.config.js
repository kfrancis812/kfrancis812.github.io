/** @type {import('tailwindcss').Config} */


const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tan': '#F6EFEB',
        'darkpurple': '#624F82',
        'teal': '#80A8A8',
        'lightpurple': '#9F73AB',
        'vlightpurple':'#D8CFE8',
        'lightblue': '#CAE3ED',
        'coral':'#D279A5',
        'ltcoral':'#D98CB2',
        'golden':'#F1AB42',
        'ltgolden':'#F8D5A0',
        'darkpgray':'#332D39',
      },
      fontFamily: {  
        'display': ['Oswald'],
        'sans': ['Roboto', ...fontFamily.sans],
        },
    },
    
},
plugins: [],
}
