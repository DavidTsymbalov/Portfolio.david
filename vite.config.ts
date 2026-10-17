import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://davidtsymbalov.github.io/Portfolio.david/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio.david/',
})
