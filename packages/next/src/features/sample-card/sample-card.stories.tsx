import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { SampleCard } from './sample-card'

type SampleCardType = typeof SampleCard

export default {
    title: 'Next/SampleCard',
    component: SampleCard,
    render: (props) => <SampleCard {...props} />,
    decorators: (Story: StoryFn) => <Story />,
} satisfies Meta<SampleCardType>

export const Default: StoryObj<SampleCardType> = {
    args: { text: 'SampleCard Component' },
}
