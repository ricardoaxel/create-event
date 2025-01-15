/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        secondary: "var(--text-secondary)",
        warning: "var(--text-warning)",
        accent: "var(--accent)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        header: "var(--bg-header)",
        tertiary: "var(--bg-tertiary)",
        accent: "var(--accent)",
        "accent-opacity": "var(--bg-accent-opacity)",
        disabled: "var(--disabled)",
        success: "var(--success)",
        warning: "var(--bg-warning)",
        selection: "var(--selection)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderColor: {
        selected: "var(--selection)",
        accent: "var(--accent)",
        "accent-opacity": "var(--border-accent-opacity)",
      },
    },
  },
  plugins: [],
};
