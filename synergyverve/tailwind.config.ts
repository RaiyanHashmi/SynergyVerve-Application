import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        animation: {
          "meteor-effect": "meteor 5s linear infinite",
        },
        keyframes: {
          meteor: {
            "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
            "70%": { opacity: "1" },
            "100%": {
              transform: "rotate(215deg) translateX(-500px)",
              opacity: "0",
            },
          },
        },
      colors: {
        text: "#050316",
        background: "#ffffff",
        primary: {
          DEFAULT: "#06c8f4",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#dddbff",
          foreground: "#050316",
        },
        accent: {
          DEFAULT: "#443dff",
          foreground: "#ffffff",
        },
        foreground: "#050316",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#050316",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#050316",
        },
        muted: {
          DEFAULT: "#dddbff",
          foreground: "#050316",
        },
        destructive: {
          DEFAULT: "#ff4d4d",
          foreground: "#ffffff",
        },
        border: "#dddddd",
        input: "#eeeeee",
        ring: "#06c8f4",
        chart: {
          "1": "#06c8f4",
          "2": "#443dff",
          "3": "#dddbff",
          "4": "#ff4d4d",
          "5": "#050316",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
