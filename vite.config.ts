import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'index.html')
      }
    },
    sourcemap: true,
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    open: true
  }
});
