import { crx, defineManifest } from '@crxjs/vite-plugin'
// import react from '@vitejs/plugin-react-swc' // crxjs does not support react-swc yet
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const manifest = defineManifest({
    manifest_version: 3,
    name: 'My Extension',
    version: '1.0.0',
    permissions: [],
    action: {
        default_popup: 'index.html',
    },
    options_page: 'options.html',
})

export default defineConfig({
    plugins: [react(), crx({ manifest })],
    server: {
        host: true,
    },
})
