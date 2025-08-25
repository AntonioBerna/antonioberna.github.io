import { defineConfig } from 'vite';

export default defineConfig({
  root: './docs',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});