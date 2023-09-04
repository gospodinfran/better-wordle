/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-5px)' }, // Reduce the duration of each keyframe
          '30%': { transform: 'translateX(5px)' },
          '45%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        shake: 'shake 1s'
      }
    },
    fontFamily: {
      'lora': ['Lora', 'serif']
    }
  },
  plugins: [],
}

