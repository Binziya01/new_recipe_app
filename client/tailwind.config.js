/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#f9f7f3',
        'secondary':'#1b2629',
        'btnColor':'#9c702a'
      },
    },
  },
  plugins: [],
}

