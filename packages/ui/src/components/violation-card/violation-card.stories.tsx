import type { Meta, StoryObj } from '@storybook/react'

import { ViolationCard } from './violation-card'

type ViolationCardType = typeof ViolationCard

const meta: Meta<ViolationCardType> = {
    title: 'ViolationCard',
    component: ViolationCard,
    render: (props) => <ViolationCard {...props} />,
    decorators: [(Story) => Story()],
}
export default meta

export const Default: StoryObj<ViolationCardType> = {
    args: { text: 'Violation' },
}
