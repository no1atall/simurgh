module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('https://10619-2.s.cdn12.com/rests/original/105_508425103.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
