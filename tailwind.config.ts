import type { Config } from "tailwindcss";

export default {
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
        primary: "#304c7a", // Button color
      },
      animation: {
        shimmer: 'shimmer 1s infinite',
        gradient: 'gradient 5s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundColor: '#775258' },
          '25%': { backgroundColor: '#7cb477' },
          '50%': { backgroundColor: '#6cb4b7' },
          '75%': { backgroundColor: '#363445' },
          '100%': { backgroundColor: '#775258' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
