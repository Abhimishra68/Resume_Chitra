/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#07122A",
        surface: "#07122A",
        "surface-container-low": "#101B33",
        "surface-container": "#151F37",
        "surface-container-high": "#1F2942",
        primary: "#0A192F",
        secondary: {
          DEFAULT: "#00F0FF",
          light: "#D3FBFF",
          dim: "#00B8C8",
        },
        tertiary: {
          DEFAULT: "#64FFDA",
          dim: "#38DEBB",
        },
        neutral: "#8892B0",
        "on-background": "#D9E2FF",
        "on-surface": "#D9E2FF",
        "on-surface-variant": "#C5C6CD",
      },
      fontFamily: {
        headline: ["'Literata'", "serif"],
        body: ["'Hanken Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px rgba(0, 240, 255, 0.2)',
        'cyan-glow-lg': '0 0 50px rgba(0, 240, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
