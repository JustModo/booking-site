import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          "primary": "#111827",
          "secondary": "#9ca3af",
          "accent": "#dc2626",
          "neutral": "#e5e7eb",
          "base-100": "#f3f4f6",
          "info": "#67e8f9",
          "success": "#6ee7b7",
          "warning": "#fde047",
          "error": "#be123c",
        },
        dark: {
          "primary": "#f3f4f6",
          "secondary": "#9ca3af",
          "accent": "#dc2626",
          "neutral": "#292524",
          "base-100": "#1c1917",
          "info": "#67e8f9",
          "success": "#6ee7b7",
          "warning": "#fde047",
          "error": "#be123c",
        },
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
          "primary": "#111827",
          "secondary": "#9ca3af",                  
          "accent": "#dc2626",
          "neutral": "#e5e7eb",
          "base-100": "#f3f4f6",
          "info": "#67e8f9",
          "success": "#6ee7b7",
          "warning": "#fde047",
          "error": "#be123c",
        },
        dark: {
          "primary": "#f3f4f6",
          "secondary": "#9ca3af",
          "accent": "#dc2626",
          "neutral": "#292524",
          "base-100": "#1c1917",
          "info": "#67e8f9",
          "success": "#6ee7b7",
          "warning": "#fde047",
          "error": "#be123c",
        },
      },
    ],
  },

  plugins: [daisyui],
};
export default config;
