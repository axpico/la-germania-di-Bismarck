/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'prussian-blue': '#1B365D', // Deeper, richer Prussian blue
        'imperial-gold': '#C5A572', // More muted, elegant gold
        'ivory': '#F5F2E9', // Warmer, creamier ivory
        
        // Secondary colors
        'burgundy': '#8B1A3B', // Rich, deep burgundy
        'forest-green': '#2C4F43', // Muted, sophisticated green
        'warm-gray': '#6B5B4D', // Warm, earthy gray
        
        // Accent colors
        'cream': '#F8F4E3', // Soft cream
        'dark-gray': '#2C2C2C', // Deep, rich dark gray
        'sepia': '#704214', // Warm sepia tone
        'silver': '#C0C0C0', // Metallic silver
        'bronze': '#CD7F32', // Warm bronze
        'parchment': '#F4E4BC', // Aged parchment color
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