import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://linuxhari.github.io/react-quiz-app/",
  plugins: [react()],
})
