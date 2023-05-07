/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bodoni-moda': ['Bodoni Moda']
      },
      colors: {
        'dark': '#212121',
        'dust': '#d4fc79',
        'grass': '#96e6a1'
      },
      animation: {
        'bounce-slow': 'bounce 10s infinite'
      }
    },
  },
  plugins: [],
}

