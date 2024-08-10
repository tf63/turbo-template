import path from 'node:path'
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
    // appsのパスはプロジェクトに応じて追加する
    stories: ['../../../packages/ui/src/**/*.stories.*', '../../../packages/ui/src/**/*.mdx'],
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
        name: '@storybook/nextjs',
        options: {},
    },
    webpackFinal: (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@ui': path.resolve(__dirname, '../../../packages/ui/src'),
            }
        }
        return config
    },
}

export default config
