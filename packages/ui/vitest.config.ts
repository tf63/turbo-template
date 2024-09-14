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
            reportsDirectory: './test/unit/coverage',
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
        setupFiles: ['./test/unit/setup.ts'],
        alias: {
            '@repo/ui': path.resolve(__dirname, './src'),
        },
    },
})
