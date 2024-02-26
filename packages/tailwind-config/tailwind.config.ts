import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
      },
    },
  },
  plugins: [],
};

export default config;
