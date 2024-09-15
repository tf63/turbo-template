import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { ViolationCard } from './violation-card'

type ViolationCardType = typeof ViolationCard

export default {
    title: 'Ui/ViolationCard',
    component: ViolationCard,
    render: (props) => <ViolationCard {...props} />,
    decorators: (Story: StoryFn) => <Story />,
} satisfies Meta<ViolationCardType>

export const Default: StoryObj<ViolationCardType> = {
    args: { text: 'Violation' },
}
