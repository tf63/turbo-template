import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['../../apps/*/src/**/*.{jsx,tsx,mdx}', '../../packages/*/src/**/*.{jsx,tsx,mdx}'],
    theme: {
        extend: {},
    },
    plugins: [],
}
export default config
