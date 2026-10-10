/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#f2f1ed',
          dark: '#0c0c0c',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          dark: '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        notevault: ['"Tiempos Text"', 'Newsreader', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
