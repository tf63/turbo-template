import react from '@vitejs/plugin-react-swc'
import { createFilter, defineConfig } from 'vite'

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

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), removeUseClient()],
    server: {
        host: true,
    },
    resolve: {
        alias: [
            { find: '@repo/react/', replacement: `${__dirname}/src/` },
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
