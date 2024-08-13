import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  base: '/vite-project/',  
  plugins: [
    Inspect()
  ],
})
