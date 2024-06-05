import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      }
    ],
    dedupe: ['vue']
  },
  plugins: [react()]
})
