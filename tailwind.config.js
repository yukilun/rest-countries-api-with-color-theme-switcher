/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/5': '4 / 5',
        '5/3': '5 / 3',
        '7/5': '7 / 5',
      },
    }
  },
  plugins: [],
  darkMode: 'class',
};
