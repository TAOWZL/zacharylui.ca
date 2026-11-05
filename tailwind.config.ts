import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm ink ground. Lane Z sits on ink; Wuji Xuan's red-and-gold stays on the clinic brand.
        charcoal: {
          950: "#14100c",
          900: "#1e1812",
          800: "#32291f"
        },
        // Warm neutrals replace Tailwind's cold grey across every text-zinc-* class.
        zinc: {
          50: "#f7f1e3",
          100: "#ede3cc",
          200: "#e6dbc3",
          300: "#d6cbb3",
          400: "#b8ae99",
          500: "#94897a",
          600: "#6e6559",
          950: "#14100c"
        },
        gold: {
          400: "#c9a45c",
          500: "#b8934d",
          600: "#9a7a3d"
        },
        red: {
          600: "#c43737",
          700: "#a62222"
        },
        // Brand: cream for reading. Cinnabar (zhu sha, the talisman ink) marks anything paid.
        // Gold marks the free Index. Paper is the one talisman-paper block, the Secret Menu.
        paper: {
          100: "#f3e3b3"
        },
        cream: {
          50: "#f7f1e3",
          200: "#ede3cc",
          400: "#d8c9a8"
        },
        cinnabar: {
          400: "#e0553d",
          500: "#c8432f",
          600: "#a92f20",
          700: "#9e2a1c"
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
