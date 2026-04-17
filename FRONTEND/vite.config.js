import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'GamerZone Ultimate',
        short_name: 'GamerZone',
        description: 'Mi tienda de libros y juegos',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@mui')) {
            return 'mui';
          }
          if (id.includes('react-router-dom') || id.includes('react-dom')) {
            return 'react-core';
          }
        }
      }
    }
  }
})