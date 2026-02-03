/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#204ce5',
        secondary: '#768fbd',
        dark: '#2c3e50',
        light: '#f5f5f5',
      },
      fontFamily: {
        sans: ['Montserrat', 'Source Sans Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
