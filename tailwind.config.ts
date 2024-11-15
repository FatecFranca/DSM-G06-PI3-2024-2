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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'deep-blue-1300':'#040c10',
        'depp-blue-1200': '#071820',
        'deep-blue-1100': '#0b2530',
        'deep-blue-1000': '#0e3140',
        'deep-blue-900': '#123d50',
        'deep-blue-800': '#154a60',
        'deep-blue': '#195670',
        'deep-blue-600': '#1d6280',
        'deep-blue-500': '#206f90',
        'deep-blue-400': '#247ba0',
        'deep-blue-300': '#2787b0',
        'deep-blue-200': '#2b94c0',
        'deep-blue-100': '#2ea0d0',
        'sand-1500': '#764a24',
        'sand-1400': '#855329',
        'sand-1300': '#c78349',
        'sand-1200': '#cc8d58',
        'sand-1100': '#d09767',
        'sand-1000': '#d5a276',
        'sand-900': '#d9ac85',
        'sand': '#deb694',
        'sand-700': '#e3c0a3',
        'sand-600': '#e7cab2',
        'sand-500': '#ecd5c1',
        'sand-400': '#f0dfd0',
        'sand-300': '#f5e9df',
        'sand-200': '#faf3ee',
        'sand-100': '#fefefd'
      },
    },
  },
  plugins: [],
};
export default config;
