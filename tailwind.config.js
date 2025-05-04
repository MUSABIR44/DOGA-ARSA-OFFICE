/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        secondary: {
          DEFAULT: '#795548',
          light: '#A1887F',
          dark: '#5D4037',
        },
        tertiary: {
          DEFAULT: '#607D8B',
          light: '#90A4AE',
          dark: '#455A64',
        },
        success: '#2E7D32',
        warning: '#F9A825',
        error: '#D32F2F',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/268959/pexels-photo-268959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'about-pattern': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};