/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom background color
        background: '#1B1A17',
        primary:"#A35709"
      },
    },
  },
  plugins: [],
}
