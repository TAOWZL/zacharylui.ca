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
        },
        // Brand: cream for reading, cinnabar for accents, gold only for the one primary button.
        cream: {
          50: "#f7f1e3",
          200: "#ede3cc",
          400: "#d8c9a8"
        },
        cinnabar: {
          400: "#e0644f",
          500: "#c8432f",
          600: "#a8321f"
        }
      },
      fontFamily: {
        display: ["\"EB Garamond\"", "Georgia", "\"Noto Serif TC\"", "serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
