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
        // Libraries in their own chunks, so a content change doesn't make visitors re-download them.
        // Function form: React ships as CommonJS, and the object form left its chunk empty.
        manualChunks(id) {
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'vendor-react'
          if (/node_modules\/(react-router|react-router-dom|cookie|set-cookie-parser)\//.test(id)) return 'vendor-router'
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
