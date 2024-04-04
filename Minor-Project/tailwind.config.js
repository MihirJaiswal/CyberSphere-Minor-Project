/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#F442FB',
      'flower': '#d10863',
      'bg':'#101010',
      'text': '#DAE6F1',
      'red' : '#C50003',
      'green': '#00AB2F',
      'pink' : '#df1dc5',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

