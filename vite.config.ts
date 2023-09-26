import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
  },
  plugins: [
    viteStaticCopy({
        targets: [
            { src: 'assets/icons/**/*', dest: 'assets/icons/' },
            { src: 'assets/avatars/**/*', dest: 'assets/avatars/' },
        ],
    }),
],

})
