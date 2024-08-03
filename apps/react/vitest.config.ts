import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [react()],
    test: {
        include: ['./src/**/*.{test,spec}.{ts,tsx}'],
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.{idea,git,cache,output,temp,next}/**',
            '**/*.stories.*',
            '**/*.config.*',
            '**/*.d.ts',
        ],
        coverage: {
            enabled: true,
            reportsDirectory: './src/test/coverage',
            reporter: ['text', 'json', 'html'],
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/.{idea,git,cache,output,temp,next}/**',
                '**/*.stories.*',
                '**/*.config.*',
                '**/*.d.ts',
            ],
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
