import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'

const fullReloadAlways: PluginOption = {
  name: 'full-reload-always',
  handleHotUpdate({ server }) {
    server.ws.send({ type: 'full-reload' })
    return []
  }
}

export default defineConfig({
  plugins: [react(), fullReloadAlways],
  server: {
    watch: { usePolling: true },
    port: 3000,
  }
})
