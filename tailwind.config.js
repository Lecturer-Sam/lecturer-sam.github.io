/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4361ee",
        secondary: "#3f37c9",
        accent: "#4895ef",
        coral: "#f8a195",
        lightcoral: "#fac7bc",
        darkblue: "#4a4e74",
        lightgray: "#f5f5f5",
        sidebar: "#f9f9f9"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
