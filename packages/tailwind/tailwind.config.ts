import type { Config } from 'tailwindcss'

// We want each package to be responsible for its own content.
const config: Config = {
    content: [
        '../../apps/next/src/**/*.{jsx,tsx,mdx}',
        '../../apps/react/src/**/*.{jsx,tsx,mdx}',
        '../../apps/react-chrome/src/**/*.{jsx,tsx,mdx}',
        '../../packages/ui/src/**/*.{jsx,tsx,mdx}'
    ],
    theme: {
        extend: {}
    },
    plugins: []
}
export default config
