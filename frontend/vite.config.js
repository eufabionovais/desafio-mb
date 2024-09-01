import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/registration': 'http://localhost:3000',
    },
  },
})
