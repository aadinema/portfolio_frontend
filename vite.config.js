// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Change this if your app is served from a subdirectory
  build: {
    outDir: "dist", // Ensure this matches the output directory in your deploy script
  },
  
});
