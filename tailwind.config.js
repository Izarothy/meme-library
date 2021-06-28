module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bgimage': "url('https://images.pexels.com/photos/696680/pexels-photo-696680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
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
