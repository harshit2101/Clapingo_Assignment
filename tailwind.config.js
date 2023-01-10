/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '26px 26px 23px rgba(204, 210, 212, 0.36)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}
