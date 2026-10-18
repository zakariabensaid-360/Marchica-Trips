import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        activities: resolve(__dirname, 'activities.html'),
        details: resolve(__dirname, 'details.html'),
        faq: resolve(__dirname, 'faq.html'),
        reservation: resolve(__dirname, 'reservation.html'),
      },
    },
  },
})
