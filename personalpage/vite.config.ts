import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 5 still uses Sass features that Dart Sass has deprecated.
        // Hide warnings from node_modules; warnings from our own files still show.
        quietDeps: true,
        silenceDeprecations: ["import"],
      },
    },
  },
  build: isSsrBuild
    ? // Build-time only bundle used by prerender.js; it is deleted afterwards.
      { outDir: "dist/server", copyPublicDir: false }
    : { outDir: "dist/personalpage" },
}));
