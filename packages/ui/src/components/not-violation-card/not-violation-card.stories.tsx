import type { Meta, StoryObj } from '@storybook/react'

import { NotViolationCard } from './not-violation-card'

type NotViolationCardType = typeof NotViolationCard

const meta: Meta<NotViolationCardType> = {
    title: 'NotViolationCard',
    component: NotViolationCard,
    render: (props) => <NotViolationCard {...props} />,
    decorators: [(Story) => Story()],
}
export default meta

export const Default: StoryObj<NotViolationCardType> = {
    args: { text: 'Not Violation' },
}
