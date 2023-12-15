/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red': 'hsl(0, 100%, 66%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-violet':' hsl(270, 3%, 87%)',
      'dark-violet':' hsl(279, 6%, 55%)',
      'very-dark-violet': 'hsl(278, 68%, 11%)'

    },
    container: {
      center: true,
    },
    fontFamily:{
      
    }
  },
  plugins: [],
}