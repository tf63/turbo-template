import type { Decorator, Preview } from '@storybook/react'

import '@repo/tailwind/styles.css'

export const decorators: Decorator[] = [
    (Story) => (
        <div className="flex items-center justify-center p-5">
            <Story />
        </div>
    ),
]

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: ['Ui'],
            },
        },
        a11y: {
            config: {
                rules: [{ id: 'color-contrast', enabled: false }],
            },
        },
    },
    tags: ['autodocs'],
}

export default preview
