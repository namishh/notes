/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "background-2": "#0a0a0a",
        surface: "#0f0f0f",
        "surface-blue": "#0f1c2e",
        "surface-2": "#1a1a1a",
        foreground: "#ededed",
        contrast: "#454545",
        muted: "#9c9c9c",
        primary: "#52a8ff",
      },
    },
  },
  plugins: [],
};
