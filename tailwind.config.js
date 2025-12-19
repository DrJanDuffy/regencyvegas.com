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
          700: "#2d4a6f",
          800: "#1a365d",
          900: "#1a202c",
        },
        amber: {
          400: "#fbbf24",
          500: "#d69e2e",
          600: "#b7791f",
          700: "#92400e",
        },
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
        },
        cream: {
          50: "#faf9f7",
          100: "#f5f3f0",
          200: "#e8e5df",
        },
        luxury: {
          black: "#0a0a0a",
          900: "#111827",
          800: "#1f2937",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};


