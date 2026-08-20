import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#3013b1",
        secondary: "#0a192f",
        surface: "#f8f9ff",
        accent: "#f26e22",
        textMain: "#1e293b",
        textMuted: "#475569",
        borderLight: "#e2e8f0",
      },
      borderRadius: {
        "8xl": "2rem",
      },
      keyframes: {
        "marquee-scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-scroll-left 30s linear infinite",
        "marquee-right": "marquee-scroll-right 30s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};

export default config;
