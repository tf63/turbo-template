import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Card } from './card'

type CardType = typeof Card

export default {
    title: 'Component/Card',
    component: Card,
    render: (props) => <Card {...props} />,
    decorators: (Story: StoryFn) => (
        <div>
            <Story />
        </div>
    )
} satisfies Meta<CardType>

export const Default: StoryObj<CardType> = {
    args: { text: 'Card Component' }
}
