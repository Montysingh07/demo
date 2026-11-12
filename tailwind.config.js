/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F5F0',
        sand: '#EAE4DC',
        stone: '#D6CEC2',
        charcoal: '#1E1E1D',
        graphite: '#4A4945',
        muted: '#7A766F',
        terracotta: {
          DEFAULT: '#B86B4B',
          dark: '#9A5437',
          light: '#E9D6CD',
        },
        olive: {
          DEFAULT: '#5F6A57',
          dark: '#485241',
          light: '#DCE2D7',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '-0.02em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
};

