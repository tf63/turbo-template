import { Card } from './card'

import type { Meta, StoryObj } from '@storybook/react'

type StoryType = typeof Card

export default {
    title: 'Card',
    component: Card,
} satisfies Meta<StoryType>

export const Default: StoryObj<StoryType> = {
    render: () => (
        <Card title="title" href="">
            Card
        </Card>
    ),
}
