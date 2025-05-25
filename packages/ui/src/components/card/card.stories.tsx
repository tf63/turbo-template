import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

type CardType = typeof Card

const meta: Meta<CardType> = {
    title: 'Card',
    component: Card,
    render: (props) => <Card {...props} />,
    decorators: [(Story) => Story()],
}
export default meta

export const Default: StoryObj<CardType> = {
    args: { text: 'Card Component' },
}
