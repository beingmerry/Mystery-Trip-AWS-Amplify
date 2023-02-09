// modified file per https://github.com/aws-amplify/amplify-js/issues/10242#issuecomment-1399596417
import react from '@vitejs/plugin-react-swc'

/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  ...(process.env.NODE_ENV === 'development'
    ? {
        define: {
          global: {}
        }
      }
    : {}),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      ...(process.env.NODE_ENV !== 'development'
        ? {
            './runtimeConfig': './runtimeConfig.browser' //fix production build
          }
        : {})
    }
  }
})
