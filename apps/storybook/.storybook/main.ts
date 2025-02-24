import path from 'node:path'

import type { StorybookConfig } from '@storybook/react-vite'
import react from '@vitejs/plugin-react-swc'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
    stories: [
        '../../../apps/*/src/**/*.stories.*',
        '../../../apps/*/src/**/*.mdx',
        '../../../packages/*/src/**/*.stories.*',
        '../../../packages/*/src/**/*.mdx',
    ],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-interactions',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@storybook/addon-console',
        '@whitespace/storybook-addon-html',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    viteFinal: (config) => {
        return mergeConfig(config, {
            plugins: [react()],
            resolve: {
                alias: {
                    '@repo/next14': path.resolve(__dirname, '../../../apps/next14/src'),
                    '@repo/next15': path.resolve(__dirname, '../../../apps/next15/src'),
                    '@repo/react18': path.resolve(__dirname, '../../../apps/react18/src'),
                    '@repo/react19': path.resolve(__dirname, '../../../apps/react19/src'),
                    '@repo/react-chrome': path.resolve(__dirname, '../../../apps/react-chrome/src'),
                    '@repo/ui': path.resolve(__dirname, '../../../packages/ui/src'),
                },
            },
        })
    },
}

export default config
