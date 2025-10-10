import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgrPlugin from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgrPlugin(),
  ],
  test: {
    globals: true,
    environment: 'jsdom', // Needed for React Testing Library
    setupFiles: './src/setupTests.ts', // optional setup file
  }
})
