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
        // Primary palette
        slate: {
          950: "#0f1117",
          900: "#171923",
          850: "#1c2130",
          800: "#232838",
        },
        amber: {
          everist: "#c1914b",
          light: "#d4a45e",
          muted: "#8a6535",
          subtle: "rgba(193,145,75,0.12)",
        },
        // Text
        cream: "#f0ece4",
        muted: "#9a9590",
        faint: "#6b6762",
        // Borders
        border: {
          dark: "rgba(240,236,228,0.08)",
          medium: "rgba(240,236,228,0.14)",
          light: "rgba(240,236,228,0.22)",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "grid-amber":
          "linear-gradient(rgba(193,145,75,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(193,145,75,0.04) 1px, transparent 1px)",
        "gradient-radial-hero":
          "radial-gradient(ellipse at top right, rgba(193,145,75,0.14) 0%, transparent 60%)",
        "gradient-radial-left":
          "radial-gradient(ellipse at bottom left, rgba(193,145,75,0.08) 0%, transparent 55%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
