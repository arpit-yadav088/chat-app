import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), "daisyui",],
   server: {
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:5002",
        changeOrigin: true,
      },
    },
  },
})
