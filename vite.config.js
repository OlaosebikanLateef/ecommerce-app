import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // Note: @tailwindcss/vite, not tailwindcss

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // This is the correct v4 plugin
  ],
})