import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Poppins'", "'Montserrat'", "'cursive'", "sans-serif"],
        body: ["'Inter'", "'Nunito'", "sans-serif"],
      },
      colors: {
        brand: {
          light: "#f3e8ff",
          DEFAULT: "#a21caf",
          dark: "#701a75",
        },
        highlight: {
          light: "#fef9c3",
          DEFAULT: "#fde047",
          dark: "#facc15",
        },
        accent: {
          light: "#cffafe",
          DEFAULT: "#06b6d4",
          dark: "#0e7490",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        monochrome: {
          "primary": "#111111",
          "secondary": "#222222",
          "accent": "#ffffff",
          "neutral": "#1a1a1a",
          "base-100": "#000000",
          "info": "#d1d5db",
          "success": "#10b981",
          "warning": "#f59e42",
          "error": "#ef4444",
          "--rounded-box": "1.5rem",
          "--rounded-btn": "1.25rem",
          "--rounded-badge": "1.5rem",
          "--tab-radius": "1.5rem",
        },
      },
      "black",
      "luxury",
    ],
  },
};