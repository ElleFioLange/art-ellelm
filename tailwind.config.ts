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
        "baby-powder": "rgb(var(--baby-powder) / <alpha-value>)",
        "raisin-black": "rgb(var(--raisin-black) / <alpha-value>)",
        "hookers-green": "rgb(var(--hookers-green) / <alpha-value>)",
        "tea-green": "rgb(var(--tea-green) / <alpha-value>)",
        celadon: "rgb(var(--celadon) / <alpha-value>)",
        amaranth: "rgb(var(--amaranth) / <alpha-value>)",
        sky: "rgb(var(--sky) / <alpha-value>)",
        // ===========================================
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
        "cormorant-uni": ["var(--cormorant-unicase)"],
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "fade-out": "fade-out 1s ease-in-out",
        "indicate-scroll-x": "indicate-scroll-x 3s ease-in-out 2s infinite",
        "indicate-scroll-y": "indicate-scroll-y 3s ease-in-out 2s infinite",
        flash: "flash 1.5s ease-in-out",
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
        flash: {
          "0%": {
            "background-image":
              "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0.3) 90%, rgba(255,255,255,0) 100%)",
            "background-size": "0.1%",
            "background-position": "center",
            "background-repeat": "no-repeat",
          },
          "100%": {
            "background-image":
              "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0.3) 90%, rgba(255,255,255,0) 100%)",
            "background-size": "2000%",
            "background-position": "center",
            "background-repeat": "no-repeat",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
