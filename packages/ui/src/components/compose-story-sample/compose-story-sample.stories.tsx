import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { ComposeStorySample } from './compose-story-sample'

type ComposeStorySampleType = typeof ComposeStorySample

export default {
    title: 'Ui/ComposeStorySample',
    component: ComposeStorySample,
    render: (props) => <ComposeStorySample {...props} />,
    decorators: (Story: StoryFn) => <Story />,
} satisfies Meta<ComposeStorySampleType>

export const Default: StoryObj<ComposeStorySampleType> = {
    args: {
        label: 'Sample Button',
    },
}
