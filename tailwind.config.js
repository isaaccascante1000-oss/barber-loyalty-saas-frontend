/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barber: {
          dark: '#121214',
          card: '#1a1a1e',
          accent: '#d4af37', // Gold vintage barber tone
          accentHover: '#b8972e',
        }
      }
    },
  },
  plugins: [],
}
