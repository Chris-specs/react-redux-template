module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['poppins']
    },
    extend: {
      colors: {
        'brand': '#61DAFB',
        'brand-bg': '#1F2937',
        'brand-purple': '#B540FC',
        'icon': '#04B6D3'
      },
      boxShadow: {
        'brand': '0 0 0.75rem rgba(97, 218, 251, 1)',
        'brand-purple': '0 0 0.75rem rgba(181, 64, 252, 1)',
        'brand-dark': '0 0 0.75rem rgba(0, 0, 0, 1)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
