import { SampleCard } from './sample-card'

import type { Meta, StoryObj } from '@storybook/react'

type SampleCardType = typeof SampleCard

export default {
    title: 'Chrome/SampleCard',
    component: SampleCard,
} satisfies Meta<SampleCardType>

export const Default: StoryObj<SampleCardType> = {
    render: () => <SampleCard />,
}
