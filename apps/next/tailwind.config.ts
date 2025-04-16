import sharedConfig from '@repo/tailwind/tailwind'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
    content: [
        './src/**/*.{jsx,tsx,mdx}',
        '!./src/**/*.stories.*',
        '../../packages/ui/**/*.{jsx,tsx,mdx}',
        '!../../packages/ui/**/*.stories.*',
    ],
    presets: [sharedConfig],
}

export default config
