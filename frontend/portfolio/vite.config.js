import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/my-portfolio/',   // required for GitHub Pages
  plugins: [vue()],
  server: {
    port: 5173
  }
})
