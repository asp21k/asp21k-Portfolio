/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["IBM Plex Mono", "Times", "serif"],
      secondary: ["Space Grotesk", "Helvetica", "sans-serif"],
    },
  },
  plugins: [],
}

