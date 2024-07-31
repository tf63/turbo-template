import { Card } from './card'

import type { Meta, StoryObj } from '@storybook/react'

type CardType = typeof Card

export default {
    title: 'Card',
    component: Card,
} satisfies Meta<CardType>

export const Default: StoryObj<CardType> = {
    render: () => <Card />,
}
