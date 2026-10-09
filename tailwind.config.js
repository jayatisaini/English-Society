/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50:  '#fdf2f4',
          100: '#fce7eb',
          200: '#f8ceD8',
          300: '#f3a6b4',
          400: '#eb738a',
          500: '#de4663',
          600: '#c92641',
          700: '#a91b33',
          800: '#8c1929',
          900: '#761823',
          DEFAULT: '#500B14',
          950: '#500B14',
        },
        gold: {
          50:  '#fdfaee',
          100: '#faf3cf',
          200: '#f4e59c',
          300: '#edd165',
          400: '#e5bc40',
          500: '#D4AF37',
          600: '#b88b22',
          700: '#93681d',
          800: '#7a521f',
          900: '#67441f',
          DEFAULT: '#D4AF37',
        },
        cream: '#FDFBF7',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-grid': `
          radial-gradient(ellipse 80% 70% at 50% 10%, rgba(212,175,55,0.08) 0%, transparent 70%),
          linear-gradient(to bottom, #500B14 0%, #3d0810 100%)
        `,
      },
    },
  },
  plugins: [],
};
