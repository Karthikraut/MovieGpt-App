/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  'src/components/.{js,jsx,html}', 
  './src/components/.{html,js,jsx}', 
  './App.js/.{js,jsx}', 
  'public/index.html/*.html', 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

