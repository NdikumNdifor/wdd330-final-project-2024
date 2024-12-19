import { resolve, dirname } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

// Define __dirname for ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        product: resolve(__dirname, "src/product-page/index.html"),
        WatchList: resolve(__dirname, "src/watch-list/index.html")
      },
    },
  },
});
