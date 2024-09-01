import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "not-found": "url('/undraw_page_not_found_re_e9o6.svg')",
      },
      colors: {
        background: "#f7f7f7",
        text: "#333333",
        primary: "#eb5b00",
        secondary: "#0090EB",
        trinidad: {
          50: "#fff8ec",
          100: "#ffefd3",
          200: "#ffdba5",
          300: "#ffc16d",
          400: "#ff9a32",
          500: "#ff7c0a",
          600: "#eb5b00",
          700: "#cc4602",
          800: "#a1370b",
          900: "#822f0c",
          950: "#461504",
        },
        "dodger-blue": {
          50: "#eff8ff",
          100: "#deefff",
          200: "#b6e1ff",
          300: "#75cbff",
          400: "#2cb2ff",
          500: "#0090eb",
          600: "#0078d4",
          700: "#005fab",
          800: "#00508d",
          900: "#064474",
          950: "#042a4d",
        },
        dribbble: "#ea4c89",
        facebook: "#3b5998",
        twitter: "#00acee",
        linkedIn: "#0e76a8",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
