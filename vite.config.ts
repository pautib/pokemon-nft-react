import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pokemon-nft-react',
  plugins: [react(), tsconfigPaths()],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  build: {
    outDir: 'dist'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true
  },
})