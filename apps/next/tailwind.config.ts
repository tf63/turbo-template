import sharedConfig from '@repo/config-tailwind/tailwind'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
    presets: [sharedConfig],
}

export default config
