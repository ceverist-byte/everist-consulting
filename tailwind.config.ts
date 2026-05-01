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
        bg: "#F3F0EA",
        fg: "#111111",
        "text-primary": "#111111",
        "text-secondary": "#4F4A43",
        rule: "#D8D4CB",
        "rule-strong": "#111111",
        accent: "#8A642C",
      },
      fontFamily: {
        display: ["var(--font-sans)", "sans-serif"],
        body: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
