/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-primary": "hsl(190,80%,60%)",
        "accent-secondary": "hsl(260,80%,60%)",
        "bg-primary": "hsl(210,30%,12%)",
        "bg-secondary": "hsl(210,30%,15%)",
        "bg-tertiary": "hsl(210,30%,18%)",
      },
    },
  },
  plugins: [],
}
