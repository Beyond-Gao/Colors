import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  viteCompression({
    threshold: 16384 // 对大于 16kb 的文件进行压缩
  }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    }
  },
  server: {
    host: '0.0.0.0'
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  base: "/",
})
