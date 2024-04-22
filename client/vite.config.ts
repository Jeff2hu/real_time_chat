import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Component": resolve("src/component"),
      "@Utils": resolve("src/utils"),
      "@Page": resolve("src/page"),
    },
  },
});
