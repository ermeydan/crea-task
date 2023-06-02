import { defineConfig } from 'vite'
import TsConfigPathsPlugin from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TsConfigPathsPlugin(), react()],
  build: {
    outDir: './ui-dist'
  }
})
