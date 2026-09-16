import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Root base path for custom domain (e.g. mohamedkhacha.me)
  base: '/',
  plugins: [react()],
})
