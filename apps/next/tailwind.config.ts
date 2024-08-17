import sharedConfig from '@repo/tailwind/tailwind'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
    content: ['**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}', '!**/*.stories.*'],
    presets: [sharedConfig]
}

export default config
