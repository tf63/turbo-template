import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Card } from './card'

type CardType = typeof Card

export default {
    title: 'Ui/Card',
    component: Card,
    render: (props) => <Card {...props} />,
    decorators: (Story: StoryFn) => <Story />,
} satisfies Meta<CardType>

export const Default: StoryObj<CardType> = {
    args: { text: 'Card Component' },
}
