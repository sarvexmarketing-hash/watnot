import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          DEFAULT: "#DAC5A7",
          50: "#faf7f2",
          100: "#f4eee4",
          200: "#e9ddcb",
          300: "#DAC5A7",
          400: "#caa77f",
          500: "#b58c5f",
          muted: "rgba(218, 197, 167, 0.65)",
          subtle: "rgba(218, 197, 167, 0.15)",
          ghost: "rgba(218, 197, 167, 0.05)",
          border: "rgba(218, 197, 167, 0.18)",
        },
        dark: {
          DEFAULT: "#0E0E0E",
          pitch: "#080808",
          card: "#151515",
          elevated: "#1C1C1E",
          surface: "#18181A",
          border: "#343330",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Chillax", "Inter", "system-ui", "sans-serif"],
        editorial: ["var(--font-editorial)", "Gambetta", "Playfair Display", "Georgia", "serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

