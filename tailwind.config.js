// tailwind.config.ts
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
        brand: {
          navy: "#0F172A",    // Hlboká tmavomodrá
          blue: "#1E3A8A",    // B2B akcentová modrá
          wood: "#C58B51",    // Teplý odtieň dreva
          woodDark: "#9A6532",
          lightBg: "#F8FAFC", // Jemná sivá pre pozadie sekcií
        },
      },
    },
  },
  plugins: [],
};
export default config;