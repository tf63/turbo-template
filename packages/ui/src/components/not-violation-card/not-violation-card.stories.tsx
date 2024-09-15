import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { NotViolationCard } from './not-violation-card'

type NotViolationCardType = typeof NotViolationCard

export default {
    title: 'Ui/NotViolationCard',
    component: NotViolationCard,
    render: (props) => <NotViolationCard {...props} />,
    decorators: (Story: StoryFn) => <Story />,
} satisfies Meta<NotViolationCardType>

export const Default: StoryObj<NotViolationCardType> = {
    args: { text: 'Not Violation' },
}
