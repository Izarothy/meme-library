module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bg-pattern': "url('https://i.imgur.com/eIjNpSh.jpg')"
      }),
      fontFamily: {
        montserrat: [
          'Montserrat'
        ]
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
