import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '384': '96rem',
      },
    },
  },
  variants: {
    extend: {
      // Your variant definitions here
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#1F2937",
          "secondary": "#000000",
          "accent": "#DC2626", 
          "neutral": "#f5f5f5",
          "base-100": "#ffffff",
          "info": "#22D3EE",
          "success": "#10B981", 
          "warning": "#FACC15",
          "error": "#EF4444", 
        },
        dark: {
          "primary": "#D1D5DB",
          "secondary": "#ffffff",
          "accent": "#DC2626", 
          "neutral": "#15181c", 
          "base-100": "#010409",
          "info": "#22D3EE", 
          "success": "#10B981",
          "warning": "#FACC15", 
          "error": "#EF4444",
        },
      },
    ],
  },

  plugins: [daisyui],
};
export default config;
