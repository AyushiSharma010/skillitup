/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto':['Roboto'],
        'tnr':['times new roman']
      }
    },
  },
  plugins: [],
}