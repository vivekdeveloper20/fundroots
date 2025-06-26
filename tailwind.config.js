/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          500: '#0047AB',
          600: '#003A8C',
          700: '#002B66',
          800: '#001C4A',
          900: '#000D2E',
        },
        success: {
          50: '#E8F5E8',
          100: '#C3E6C3',
          500: '#38B000',
          600: '#2E8C00',
          700: '#246600',
          800: '#1A4D00',
          900: '#0F3300',
        },
        accent: {
          50: '#FFF4E6',
          100: '#FFE4B3',
          500: '#FF8C00',
          600: '#E67A00',
          700: '#CC6900',
          800: '#B35700',
          900: '#994600',
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 71, 171, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 71, 171, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};