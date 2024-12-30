/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f1f8',
          100: '#d8daf0',
          200: '#b3b7e3',
          300: '#8e94d6',
          400: '#6971c9',
          500: '#1A237E',
          600: '#151c65',
          700: '#10154c',
          800: '#0b0e32',
          900: '#050719'
        },
        secondary: {
          50: '#faf7ed',
          100: '#f2ebcc',
          200: '#e5d699',
          300: '#d8c166',
          400: '#BBA14F',
          500: '#96813f',
          600: '#70612f',
          700: '#4a4120',
          800: '#252010',
          900: '#121008'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      },
      lineHeight: {
        tighter: '1.1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2'
      }
    }
  },
  plugins: []
};