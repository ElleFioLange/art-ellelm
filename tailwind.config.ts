import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fg: "rgb(var(--fg) / <alpha-value>)",
        bg: "rgb(var(--bg) / <alpha-value>)",
        // ===========================================
        accent: {
          fg: "rgb(var(--accent-fg) / <alpha-value>)",
          bg: "rgb(var(--accent-bg) / <alpha-value>)",
        },
        // ===========================================
        green: "rgb(var(--green) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
      },
      fontFamily: {
        cormorant: ["var(--cormorant)"],
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "fade-out": "fade-out 1s ease-in-out",
        "indicate-scroll-x": "indicate-scroll-x 3s ease-in-out 2s 3",
        "indicate-scroll-y": "indicate-scroll-y 3s ease-in-out 2s 3",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "indicate-scroll-x": {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-24px)" },
          "30%": { transform: "translateX(0)" },
        },
        "indicate-scroll-y": {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-24px)" },
          "30%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
