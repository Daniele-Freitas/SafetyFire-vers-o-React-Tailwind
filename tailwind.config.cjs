/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titulo': ["Chivo", 'sans-serif'],
        'corpo': ["work-sans", 'sans-serif']
      },
      colors: {
        safety:{
          primary:'rgb(255, 190, 179)',
          secondary: 'rgb(227, 72, 90)',
          black: 'rgb(35, 31, 32)'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/react'),
  ],
}
