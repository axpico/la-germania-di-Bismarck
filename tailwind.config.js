/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prussian-blue': '#003366',
        'imperial-gold': '#D4AF37',
        'ivory': '#FFFFF0',
        'burgundy': '#800020',
        'forest-green': '#228B22',
        'warm-gray': '#8B7355',
        'cream': '#F5F5DC',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'source': ['"Source Sans Pro"', 'sans-serif'],
        'crimson': ['"Crimson Text"', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 