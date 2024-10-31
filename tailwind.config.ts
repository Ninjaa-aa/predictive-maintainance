import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 10s ease-in-out infinite',
        'float-delay': 'float 13s ease-in-out infinite',
        'float-slow': 'float 16s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#b9dfff',
          300: '#7cc4ff',
          400: '#36a7ff',
          500: '#0088ff',
          600: '#006fd4',
          700: '#0055a3',
          800: '#004687',
          900: '#003666',
        },
        secondary: {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#99f3df',
          300: '#5be4c7',
          400: '#2cd0ae',
          500: '#15b794',
          600: '#0c9178',
          700: '#0a7262',
          800: '#0a5c4f',
          900: '#094b41',
        },
        tertiary: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dcd6ff',
          300: '#c3b5ff',
          400: '#a48bff',
          500: '#8257ff',
          600: '#724cf9',
          700: '#6132e8',
          800: '#5128c2',
          900: '#41209e',
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
};
export default config;
