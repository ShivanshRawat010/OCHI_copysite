/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'founders-grotesk': ['FoundersGrotesk', 'sans-serif'],
        'neue-montreal': ['NeueMontrealRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

