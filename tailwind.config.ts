import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9f0',
          100: '#fdf1dd',
          200: '#fae3b9',
          300: '#f7d597',
          400: '#f4c775',
          500: '#D4AF37',
          600: '#c49a2a',
          700: '#a67d1f',
          800: '#886415',
          900: '#6a4b0a',
        },
        dark: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e8e8e8',
          300: '#d3d3d3',
          400: '#a6a6a6',
          500: '#808080',
          600: '#666666',
          700: '#404040',
          800: '#262626',
          900: '#000000',
        },
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
        sans: ['var(--font-cairo)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
