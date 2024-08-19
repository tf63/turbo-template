import sharedConfig from '@repo/tailwind/tailwind'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
    content: [
        'app/*.{jsx,tsx,mdx}',
        '!app/*.stories.*',
        'features/*.{jsx,tsx,mdx}',
        '!features/*.stories.*',
        '../../packages/ui/**/*.{jsx,tsx,mdx}',
        '!../../packages/ui/**/*.stories.*'
    ],
    presets: [sharedConfig]
}

export default config
