import sharedConfig from '@repo/config-tailwind/tailwind'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './features/**/*.{js,ts,jsx,tsx,mdx}'],
    presets: [sharedConfig],
}

export default config
