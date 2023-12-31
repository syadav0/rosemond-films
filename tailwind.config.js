/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },

      colors: {
        slate: { 925: '#131313' },
      },

      backgroundImage: {
        'film-genre-1': "url('/assets/pic1.jpg')",
      }
    },
  },
  plugins: [],
}
