import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      'primary_color': '#c6e501',
      'secondary_color': '#000000',
      'tertiary_color': '#f4f2e3',
      'dark_color': '#1f2937',
      'light_color': '#f9fafb',
      'danger_color': '#dc2626',
      'success_color': '#10b981',
      'warning_color': '#f59e0b',
      'info_color': '#3b82f6',
      'dark_gray': '#374151',
      'light_gray': '#f3f4f6',
      'lighter_gray': '#f9fafb',
    }
  },
  plugins: [],
};
export default config;
