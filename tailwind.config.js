/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a1a2f',
        accent: '#d4af37',
        muted: '#666666'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Arial', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
