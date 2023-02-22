/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fca311',
        'primary-light': '#fca31179',
        text: '#ffffff',
        'text-light': '#a5a5a5',
        black: '#000000',
        'black-light': '#222',
      },
    },
  },
  plugins: [],
};
