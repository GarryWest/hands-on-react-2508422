import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // github pages, custom domain:
  // base: './', 
  build: {
    outDir: 'docs'
  }
})
