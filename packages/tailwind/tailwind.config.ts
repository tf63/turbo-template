import type { Config } from 'tailwindcss'

// We want each package to be responsible for its own content.
const config: Config = {
    content: [
        '../../apps/next/features/**/*.{js,ts,jsx,tsx,mdx}',
        '../../apps/react/src/features/**/*.{js,ts,jsx,tsx,mdx}',
        '../../apps/react-chrome/src/features/**/*.{js,ts,jsx,tsx,mdx}',
        '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
export default config
