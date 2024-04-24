import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
  resolve: {
    alias: {
      "@Component": resolve("src/component"),
      "@Utils": resolve("src/utils"),
      "@Api": resolve("src/api"),
      "@Page": resolve("src/page"),
    },
  },
});
