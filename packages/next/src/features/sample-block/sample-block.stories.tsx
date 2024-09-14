import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { SampleBlock } from './sample-block'

type SampleBlockType = typeof SampleBlock

export default {
    title: 'Next/SampleBlock',
    component: SampleBlock,
    render: (props) => <SampleBlock {...props} />,
    decorators: (Story: StoryFn) => <Story />,
} satisfies Meta<SampleBlockType>

export const Default: StoryObj<SampleBlockType> = {
    args: {},
}
