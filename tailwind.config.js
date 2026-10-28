/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        km: {
          blue: '#003366',
          'blue-dark': '#061b33',
          'blue-light': '#0055a5',
          navy: '#0a192f',
          accent: '#0284c7',
          cyan: '#00a3e0',
          ev: '#059669',
          'ev-light': '#10b981',
          gold: '#f59e0b',
          red: '#dc2626'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

