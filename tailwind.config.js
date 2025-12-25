/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-gradient-to-br',
    'from-indigo-600',
    'via-purple-600',
    'to-pink-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}