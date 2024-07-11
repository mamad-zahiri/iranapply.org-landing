import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#ffffff",
          200: "#e3e9ef",
          300: "#c6d3df",
          400: "#aabecf",
          500: "#8ea8bf",
          600: "#7192af",
          700: "#557c9f",
          800: "#39678f",
          900: "#1c517f",
          950: "#003b6f",
        },
      },
    },
    screens: {
      xl: "1440px",
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-test": {
          background:
            "repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px",
        },
      });
    }),
  ],
};
