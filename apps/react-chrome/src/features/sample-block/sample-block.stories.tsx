import type { Meta, StoryObj } from '@storybook/react'

import { SampleBlock } from './sample-block'

type SampleBlockType = typeof SampleBlock

const meta: Meta<SampleBlockType> = {
    title: 'Chrome/SampleBlock',
    component: SampleBlock,
    render: (props) => <SampleBlock {...props} />,
    decorators: [(Story) => Story()],
}

export default meta

export const Default: StoryObj<SampleBlockType> = {
    args: {},
}
