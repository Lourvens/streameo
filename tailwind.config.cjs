/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: {
          900: "hsl(222, 47%, 9%)",
          800: "hsl(222, 48%, 12%)",
          400: "hsl(222, 88%, 64%)",
        },
        white: "hsl(222, 47%, 97%)"
      },
      fontFamily: {
        'base': ['Poppins', 'sans-serif'],
        'title': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}
