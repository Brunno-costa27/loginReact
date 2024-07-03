/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|yellow|stone|black|purple|pink|indigo|gray)-(500|600)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
      colors: {
        'custom-placeholder': '#656769', // Cor personalizada para o placeholder
      },
    },
  },
  plugins: [],
}

