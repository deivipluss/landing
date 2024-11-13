/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5C5C',
        'secondary': '#4A90E2',
        'tertiary': '#0D0C1D',
        'lightGray': '#E1E1E1',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '480px',  // Definir tamaño extra pequeño
      },
    },
  },
  plugins: [],
};
