import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig(({ mode }) => {
  if (mode === "npm") {
    return {
      build: {
        minify: false,
        lib: {
          entry: path.resolve(__dirname, "src/components/Feedbacky/index.tsx"),
          name: "Feedbacky",
          fileName: (format) => `feedbacky.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            manualChunks: undefined,
            globals: {
              react: "React",
            },
          },
        },
      },
      plugins: [react(), cssInjectedByJsPlugin()],
    };
  }
  if (mode === "cdn") {
    return {
      build: {
        minify: false,
      },
      plugins: [react(), cssInjectedByJsPlugin()],
    };
  }
});
