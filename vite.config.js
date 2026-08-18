import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // Bundle react-router-dom in the SSR build so Rolldown
    // can fully resolve its ESM exports without condition mismatches
    noExternal: ['react-router-dom'],
  },
})

