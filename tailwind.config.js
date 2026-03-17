/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        concrete: '#E4E4E4',
        carbon: '#242424',
        'carbon-dark': '#111111',
        brass: '#C79816',
        nature: '#109121',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'hard': '6px 6px 0px #111111',
      }
    },
  },
  plugins: [],
}
