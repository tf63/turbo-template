import { crx, defineManifest } from '@crxjs/vite-plugin'
// import react from '@vitejs/plugin-react-swc' // crxjs does not support react-swc yet
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const manifest = defineManifest({
    manifest_version: 3,
    name: 'Chrome Extension Template',
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
    resolve: {
        alias: [
            { find: '@/', replacement: `${__dirname}/src/` },
            {
                find: '@ui/',
                replacement: `${__dirname}/../../packages/ui/src/`,
            },
        ],
    },
    build: {
        rollupOptions: {
            external: [
                'node_modules',
                'out',
                '.next',
                'bower_components',
                'jspm_packages',
                '**/*.stories.tsx',
                '**/*.test.ts',
                '**/*.test.tsx',
                '**/*.spec.ts',
                '**/*.spec.tsx',
            ],
        },
    },
})
