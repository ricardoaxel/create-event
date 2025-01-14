/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        secondary: "var(--text-secondary)",
      },
      backgroundColor: {
        header: "var(--bg-header)",
        tertiary: "var(--bg-tertiary)",
        accent: "var(--accent)",
        disabled: "var(--disabled)",
        success: "var(--success)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
