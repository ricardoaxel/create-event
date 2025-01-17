import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@hooks": "src/hooks/index.tsx",
      "@assets": "/src/assets/index.tsx",
    },
  },
});
