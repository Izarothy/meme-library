module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgimage': "url('https://wallpapercave.com/wp/wp2633640.jpg')"
      }),
      fontFamily: {
        montserrat: [
          'Montserrat'
        ]
      },
      colors: {
        'teal': '#22D3EE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.includeLanguages": { 
    "plaintext": "javascript" 
  },
}
