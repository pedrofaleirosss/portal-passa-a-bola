import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/sth": {
        target: "http://20.164.0.231:8666",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/sth/, ""),
      },
      "/api/orion": {
        target: "http://20.164.0.231:1026",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/orion/, ""),
      },
    },
  },
});
