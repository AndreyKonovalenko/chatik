import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        title: "My Chat",
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
    },
  },
});

console.log(co);
