import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Permette di accedere tramite l'indirizzo IP locale
    port: 3000,        // Imposta la porta (puoi cambiarla se necessario)
    strictPort: true,  // Assicura che la porta sia riservata
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
