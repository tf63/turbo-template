import path from 'node:path'

import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
    stories: [
        { directory: '../src', files: '**/*.stories.*', titlePrefix: 'React-Chrome' },
        { directory: '../../../packages/ui/src', files: '**/*.stories.*', titlePrefix: 'Ui' },
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
            plugins: [],
            resolve: {
                alias: {
                    '@repo/react-chrome': path.resolve(__dirname, './src'),
                    '@repo/ui': path.resolve(__dirname, '../../../packages/ui/src'),
                },
            },
        })
    },
}

export default config
