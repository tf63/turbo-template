import type { Meta, StoryObj } from '@storybook/react'

import { SampleCard } from './sample-card'

type SampleCardType = typeof SampleCard

export default {
    title: 'Next/SampleCard',
    component: SampleCard
} satisfies Meta<SampleCardType>

export const Default: StoryObj<SampleCardType> = {
    render: () => <SampleCard />
}
