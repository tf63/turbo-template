import type { Meta, StoryObj } from '@storybook/react'

import { SampleCard } from './sample-card'

type SampleCardType = typeof SampleCard

const meta: Meta<SampleCardType> = {
    title: 'Chrome/SampleCard',
    component: SampleCard,
    render: (props) => <SampleCard {...props} />,
    decorators: [(Story) => Story()],
}
export default meta

export const Default: StoryObj<SampleCardType> = {
    args: { text: 'SampleCard Component' },
}
