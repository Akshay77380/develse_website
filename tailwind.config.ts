import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0E1A",
          surface: "#11172A",
          border: "rgba(237,238,242,0.10)",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F7FA",
          surface: "#FFFFFF",
          border: "rgba(16,19,26,0.08)",
        },
        text: {
          dark: "#EDEEF2",
          "dark-muted": "#9AA1B5",
          light: "#10131A",
          "light-muted": "#4B5160",
        },
        brand: {
          blue: {
            DEFAULT: "#0066B3",
            dark: "#004A85",
            light: "#3399DD",
          },
          teal: {
            DEFAULT: "#00A896",
            light: "#33C4B5",
            dark: "#007A6E",
          },
          green: {
            DEFAULT: "#76C74D",
            light: "#95D673",
            dark: "#5A9A38",
          },
        },
        // Legacy aliases mapped to brand palette
        signal: {
          DEFAULT: "#0066B3",
          light: "#3399DD",
          dark: "#004A85",
        },
        teal: {
          DEFAULT: "#00A896",
          light: "#33C4B5",
          dark: "#007A6E",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0066B3 0%, #00A896 50%, #76C74D 100%)",
        "brand-gradient-h": "linear-gradient(90deg, #0066B3 0%, #00A896 55%, #76C74D 100%)",
        "hero-glow":
          "radial-gradient(ellipse at 70% 20%, rgba(0,102,179,0.12) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(118,199,77,0.08) 0%, transparent 50%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "pulse-line": "pulse-line 2.8s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-line": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
