/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This ensures Tailwind works with all files in src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'), 
  ],
};