/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loginbg': "url('src/assets/img/loginbg.avif')",
      
      },
      boxShadow: {
        'shadow': '0 20px 60px -30px rgba(95, 52, 245, 1)',
      }
    },
  },
  plugins: [],
}