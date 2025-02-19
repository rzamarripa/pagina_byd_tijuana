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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'xxs': '351px',

      'xs': '410px',

      'sm': '560px',

      'md': '768px',

      'lg': '824px',

      'img': '992px',

      'xl': '1080px',

      '2xl': '1201px',

      '2.5xl': '1350px',

      '3xl': '1440px',

      '4xl': '1720px',
    },
  },
  plugins: [],
};
export default config;