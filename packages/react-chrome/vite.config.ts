import { crx, defineManifest } from '@crxjs/vite-plugin'
// import react from '@vitejs/plugin-react-swc' // crxjs does not support react-swc yet
import react from '@vitejs/plugin-react'
import { createFilter, defineConfig } from 'vite'

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

// https://stackoverflow.com/questions/78744180/vite-react-use-client-sourcemap-warning
const removeUseClient = () => {
    const filter = createFilter(/.*\.(js|ts|jsx|tsx)$/)

    return {
        name: 'remove-use-client',

        transform(code: string, id: string) {
            if (!filter(id)) {
                return null
            }

            const newCode = code.replace(/['"]use client['"];\s*/g, '')

            return { code: newCode, map: null }
        },
    }
}

export default defineConfig({
    plugins: [react(), removeUseClient(), crx({ manifest })],
    server: {
        host: true,
    },
    resolve: {
        alias: [
            { find: '@repo/react-chrome/', replacement: `${__dirname}/src/` },
            {
                find: '@repo/ui/',
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
