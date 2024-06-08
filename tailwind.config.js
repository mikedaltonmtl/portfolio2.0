/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#f97316',
        'bgLight': '#ffffdb',
      },
      animation: {
        'slide-in-from-left': 'slide-in-from-left 1s cubic-bezier(0.68, -0.9, 0.265, 1.9)',
        'slide-in-from-right': 'slide-in-from-right 1s cubic-bezier(0.68, -0.9, 0.265, 1.9)',
        'jiggle': 'jiggle 0.7s linear',
        'antiJiggle': 'antiJiggle 0.7s linear',

      },
      keyframes: {
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'jiggle': {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '14%': { transform: 'translateY(-10px) rotate(0)' },
          '28%': { transform: 'translateY(0) rotate(-5deg)' },
          '43%': { transform: 'translateY(-5px) rotate(15deg)' },
          '57%': { transform: 'translateY(0) rotate(0)' },
          '71%': { transform: 'translateY(-2px) rotate(-10deg)' },
          '85%': { transform: 'translateY(0) rotate(5deg)' },
        },
        'antiJiggle': {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '14%': { transform: 'translateY(0) rotate(0)' },
          '28%': { transform: 'translateY(-10px) rotate(5deg)' },
          '43%': { transform: 'translateY(0) rotate(-15deg)' },
          '57%': { transform: 'translateY(-5px) rotate(0)' },
          '71%': { transform: 'translateY(0) rotate(10deg)' },
          '85%': { transform: 'translateY(-2px) rotate(-5deg)' },
        },
      },
    },
  },
  plugins: [],
};
