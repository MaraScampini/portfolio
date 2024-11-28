/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gray-background': '#464646',
        'pastel-blue': '#D1E9F6',
        'pastel-yellow': '#F6EACB',
        'dusty-pink': '#EECAD5',
        'light-gray-text': "#CDCDCD"
      },
    },
  },
  plugins: [],
}