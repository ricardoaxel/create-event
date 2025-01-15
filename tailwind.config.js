/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        secondary: "var(--text-secondary)",
        warning: "var(--text-warning)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        header: "var(--bg-header)",
        tertiary: "var(--bg-tertiary)",
        accent: "var(--accent)",
        disabled: "var(--disabled)",
        success: "var(--success)",
        warning: "var(--bg-warning)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderColor: {
        selected: "var(--border-selected)",
      },
    },
  },
  plugins: [],
};
