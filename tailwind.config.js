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
        "warning-opacity": "var(--bg-warning-opacity)",
        selection: "var(--selection)",
        "banner-opacity": "var(--bg-banner-opacity)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderColor: {
        selected: "var(--selection)",
        warning: "var(--bg-warning)",
        accent: "var(--accent)",
        "accent-opacity": "var(--border-accent-opacity)",
        "input-focus-opacity": "var(--border-input-focus-opacity)",
        "drag-and-drop": "var(--border-drag-and-drop)",
      },
    },
  },
  plugins: [],
};
