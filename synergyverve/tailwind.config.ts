import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#050316",
        background: "#ffffff",
        primary: "#05b2d2",
        secondary: "#dddbff",
        accent: "#443dff",
      },
    },
  },
  plugins: [],
} satisfies Config;
