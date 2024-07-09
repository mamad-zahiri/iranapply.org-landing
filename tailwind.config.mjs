import defaultTheme from "tailwindcss/defaultTheme";

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
          50: "#e9fcff",
          100: "#cef7ff",
          200: "#a7f3ff",
          300: "#6bf0ff",
          400: "#26e1ff",
          500: "#00beff",
          600: "#0094ff",
          700: "#0079ff",
          800: "#0068e6",
          900: "#005cb3",
          950: "#003b6f",
        },
      },
    },
    screens: {
      xl: "1440px",
    },
  },
  plugins: [],
};
