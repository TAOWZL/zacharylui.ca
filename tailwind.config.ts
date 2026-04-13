import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#151516",
          900: "#1d1d1f",
          800: "#28282b"
        },
        gold: {
          400: "#e6c75a",
          500: "#d9b74f",
          600: "#b99234"
        },
        red: {
          600: "#c43737",
          700: "#a62222"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
