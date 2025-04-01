import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Доступно в локальной сети
    port: 5173, // Можно указать свой порт
  },
})
