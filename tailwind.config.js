/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(gradient|indigo|purple|pink|blue)-(.*)/, // Keeps all gradients
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}