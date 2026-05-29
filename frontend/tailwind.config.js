/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#10380b',
        'buttermilk': '#f2ee98',
        'sunshine-yellow': '#fce519',
        'parchment-white': '#fefde6',
        'muted-sage': '#dbe8ac',
        'vivid-mint': '#30be60',
      },
      fontFamily: {
        editorial: ["'National 2 Condensed'", "'Barlow Condensed'", "'Archivo Narrow'", "sans-serif"],
        body: ["'Rethink Sans'", "sans-serif"],
      },
      boxShadow: {
        'card': '8px 8px 0px 0px #10380b',
        'card-hover': '12px 12px 0px 0px #10380b',
        'btn': '4px 4px 0px 0px #10380b',
        'btn-hover': '6px 6px 0px 0px #10380b',
        'sm-card': '4px 4px 0px 0px #10380b',
      }
    },
  },
  plugins: [],
}
