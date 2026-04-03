import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1a1a1f",
          light: "#222228",
          lighter: "#2a2a32",
        },
        surface: {
          DEFAULT: "#1e1e24",
          hover: "#26262e",
        },
        gold: {
          DEFAULT: "#c9a96e",
          muted: "#b8965a",
          light: "#d4b87a",
        },
        "text-primary": "#f0ece4",
        "text-secondary": "#9a9a9a",
        "text-muted": "#6b6b6b",
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          gold: "rgba(201, 169, 110, 0.2)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
