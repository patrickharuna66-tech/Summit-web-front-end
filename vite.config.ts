import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Summit-web-front-end/',
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
