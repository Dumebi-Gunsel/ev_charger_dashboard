/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0081AF'
      },
      width: {
        '1/7': "14.2888%",
        '2/7': "28.5714%"
      }
    },
  },
  plugins: [],
}

