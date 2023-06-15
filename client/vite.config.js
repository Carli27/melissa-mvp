import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000", // need to update 5000 for windows and 4000 mac
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
