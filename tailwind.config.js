/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: "#1a365d",
          900: "#1a202c",
        },
        amber: {
          400: "#fbbf24",
          500: "#d69e2e",
          600: "#b7791f",
        },
        stone: {
          50: "#fafaf9",
          200: "#e2d5c3",
          300: "#d6d3d1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};


