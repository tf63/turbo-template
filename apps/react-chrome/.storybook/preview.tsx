import type { Preview } from '@storybook/react'

import '@repo/tailwind/styles.css'

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
    decorators: (Story) => (
        <div className="flex items-center justify-center p-5">
            <Story />
        </div>
    ),
    tags: ['autodocs'],
}

export default preview
