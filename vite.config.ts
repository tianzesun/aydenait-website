import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// isSsrBuild: the build-time renderer for scripts/prerender.mjs, which needs no chunk splitting
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    modulePreload: {
      polyfill: false
    },
    rollupOptions: isSsrBuild ? {} : {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion']
        },
        format: 'esm'
      },
      treeshake: {
        preset: 'smallest',
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      }
    },
    chunkSizeWarningLimit: 600,
    reportCompressedSize: true
  },
  esbuild: {
    target: 'esnext',
    legalComments: 'none',
    drop: ['debugger']
  }
}))
