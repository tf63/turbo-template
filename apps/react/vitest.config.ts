import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [react()],
    test: {
        include: ['./src/**/*.{test,spec}.{ts,tsx}'],
        exclude: [
            '**/*.stories.*',
            '**/node_modules/**',
            '**/dist/**',
            '**/cypress/**',
            '**/.{idea,git,cache,output,temp}/**',
            '**/*.config.*',
        ],
        coverage: {
            enabled: true,
            reportsDirectory: './src/test/coverage',
            reporter: ['text', 'json', 'html'],
        },
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/test/setup.ts'],
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@ui': path.resolve(__dirname, '../../packages/ui/src'),
        },
    },
})
