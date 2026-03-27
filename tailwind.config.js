/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🔥 MUST ADD THIS
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--theme-color)',
        dark: '#0a0a0a',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 0, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 107, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};