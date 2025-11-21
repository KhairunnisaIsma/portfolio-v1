/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Penting untuk dark/light theme toggle
  theme: {
    extend: {
      colors: {
        darkBlue: '#001159',
        darkRed: '#8B0519',
        offWhite: '#FCFBFA',
      },
      fontFamily: {
        // 'sans' adalah font default yang digunakan oleh Tailwind
        sans: ['Arvo', 'serif'],
      },
    animation: {
        'spin-slow': 'spin 20s linear infinite',
        'soft-bounce': 'soft-bounce 2.5s ease-in-out infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'soft-bounce': {
          '0%, 100%': {
            transform: 'translateY(-8%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
}