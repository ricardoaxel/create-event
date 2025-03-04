/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "rgba(var(--text-primary))",
        secondary: "rgba(var(--text-secondary))",
        warning: "rgba(var(--text-warning))",
        accent: "rgba(var(--accent))",
        success: "rgba(var(--success))",
        black: "rgba(var(--bg-header))",
      },
      backgroundColor: {
        primary: "rgba(var(--bg-primary))",
        header: "rgba(var(--bg-header))",
        tertiary: "rgba(var(--bg-tertiary))",
        accent: "rgba(var(--accent))",
        disabled: "rgba(var(--disabled))",
        success: "rgba(var(--success))",
        warning: "rgba(var(--bg-warning))",
        selection: "rgba(var(--selection))",
        tooltip: "rgba(var(--text-primary))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderColor: {
        success: "rgba(var(--success))",
        selected: "rgba(var(--selection))",
        warning: "rgba(var(--bg-warning))",
        accent: "rgba(var(--accent))",
        primary: "rgba(var(--text-primary))",
      },
      colors: {
        "text-secondary": "rgba(var(--text-secondary))",
      },
    },
  },
  plugins: [],
};
