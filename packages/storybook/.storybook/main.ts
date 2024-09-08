import path from 'node:path'

import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react-swc'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
    stories: ['../../../packages/*/src/**/*.stories.*', '../../../packages/*/src/**/*.mdx'],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-interactions',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@storybook/addon-console',
        '@whitespace/storybook-addon-html'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    viteFinal: (config) => {
        return mergeConfig(config, {
            plugins: [react()],
            resolve: {
                alias: {
                    '@repo/react': path.resolve(__dirname, '../../../packages/react/src'),
                    '@repo/react-chrome': path.resolve(__dirname, '../../../packages/react-chrome/src'),
                    '@repo/next': path.resolve(__dirname, '../../../packages/next/src'),
                    '@repo/ui': path.resolve(__dirname, '../../../packages/ui/src')
                }
            }
        })
    }
}

export default config
