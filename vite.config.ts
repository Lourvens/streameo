import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/movie': {
        target: "https://api.themoviedb.org/3/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/movie/, '')
      },
      '/api/img': {
        target: "https://api.themoviedb.org/3/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/movie/, '')
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()]
})
