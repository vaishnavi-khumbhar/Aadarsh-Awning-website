import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// npm run dev                  -> http://localhost:5173/
// npm run build / npm run preview / GitHub Pages
//                              -> /Aadarsh-Awning-website/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  base: command === "build" || isPreview ? "/Aadarsh-Awning-website/" : "/",
}));