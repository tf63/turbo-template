import sharedConfig from '@repo/tailwind/tailwind'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
    content: ['./src/**/*.{jsx,tsx,mdx}', '!./src/**/*.stories.*'],
    prefix: '',
    presets: [sharedConfig],
}

export default config
