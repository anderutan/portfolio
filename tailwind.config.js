/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'btn-main': '#C7FC77',
        'btn-second': '#ffffff',
        'f-main': '#191919',
        'f-second': '#7F7F7F',
        card: '#F5F5F5',
      },
      keyframes: {
        arrow: {
          '0%': { transform: 'translate(0px)' },
          '10%': { transform: 'translate(5px)' },
          '20%': { transform: 'translate(10x)' },
          '30%': { transform: 'translate(15px)' },
          '40%': { transform: 'translate(-15px)' },
          '50%': { transform: 'translate(-10px)' },
          '60%': { transform: 'translate(-5px)' },
          '70%': { transform: 'translate(0px)' },
          '80%': { transform: 'translate(0px)' },
          '100%': { transform: 'translate(0px)' },
        },
      },
      animation: {
        'arrow-move': 'arrow 1s linear',
      },
    },
  },
  plugins: [],
};
