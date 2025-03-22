/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1e40af",
        },
        secondary: {
          DEFAULT: "#64748b",
          light: "#94a3b8",
          dark: "#475569",
        },
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "ui-monospace"],
      },
      fontSize: {
        tiny: ["0.75rem", { lineHeight: "1rem" }], // ~12px
        small: ["0.875rem", { lineHeight: "1.25rem" }], // ~14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        body: ["1.125rem", { lineHeight: "1.75rem" }], // ~18px
        subtitle: ["1.25rem", { lineHeight: "1.75rem" }], // ~20px
        title: ["1.5rem", { lineHeight: "2rem" }], // ~24px
        headline: ["1.875rem", { lineHeight: "2.25rem" }], // ~30px
        display: ["2.25rem", { lineHeight: "2.5rem" }], // ~36px
        hero: ["3rem", { lineHeight: "1" }], // 48px
        mega: ["3.75rem", { lineHeight: "1" }], // 60px
      },
      // etc...
    },
  },
};
