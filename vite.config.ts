import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/kanji-play',
  plugins: [
    react(),
    TanStackRouterVite()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
      "@api": resolve(__dirname, 'src/api'),
      "@const": resolve(__dirname, 'src/constants'),
      "@types": resolve(__dirname, '.src/types'),
    }
  }
})
