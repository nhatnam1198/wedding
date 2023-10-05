/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Megante', 'system-ui'],
      serif: ['Drainwood', 'ui-serif'],
    },
  },
  plugins: [],
};
