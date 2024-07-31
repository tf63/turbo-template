import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
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
})
