module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      "cus" :'2px 5px 15px rgb(255 255 255 / 0.2)'
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
