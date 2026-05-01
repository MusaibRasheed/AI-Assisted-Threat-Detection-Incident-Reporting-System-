import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ai-assisted-threat-detection-incident.onrender.com',
        changeOrigin: true,
        ws: true,          // also proxy WebSocket connections (ws://localhost:5173/api/ws/alerts)
      },
    },
  },
})
