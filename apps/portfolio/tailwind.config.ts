import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Oxygen mono"', 'monospace'],
        sans: ['Oxygen', 'sans-serif'],
        'pop': ['Handlee', 'sans-serif'],
        'body': ['Calibri', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'sea-foam-light': '#75CFBC',
        'sea-foam-medium': '#46B7A7',
        'sea-foam-deep': '#4288AE',
        'lilac-light': '#d184b3',
        'lilac-medium': '#B76999',
        'lilac-deep': '#9A5680',
      },
      boxShadow: {
        sm: '2px 2px 4px 0px #4288AE',
        md: '4px 4px 8px 0px #4288AE',
        lg: '6px 6px 12px 0px #4288AE',
      },
    }
  },
  plugins: [],
};
export default config;
