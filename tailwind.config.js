/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      sans: ['Inter', 'sans'],
    },
    extend: {
      colors: {
        primary: {
          100: '#FFE0E9', // Lighter Shade
          200: '#FFC1D1',
          300: '#FFA2BA',
          400: '#FF84A2',
          DEFAULT: '#FF7FA6',
          500: '#FF6493',
          600: '#E64B84',
          700: '#B83868',
          800: '#8B264D',
          900: '#5E1431', // Darker Shade
        },
        secondary: {
          100: '#B3BDD6', // Lighter Shade
          200: '#99ACC4',
          300: '#809CB1',
          400: '#678C9F',
          DEFAULT: '#788DAB',
          500: '#5E7A8E',
          600: '#536A7E',
          700: '#45556A',
          800: '#364155',
          900: '#272C3F', // Darker Shade
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
