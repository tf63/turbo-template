import type { Meta, StoryObj } from '@storybook/react'

import { ComposeStorySample } from './compose-story-sample'

type ComposeStorySampleType = typeof ComposeStorySample

const meta: Meta<ComposeStorySampleType> = {
    title: 'ComposeStorySample',
    component: ComposeStorySample,
    render: (props) => <ComposeStorySample {...props} />,
    decorators: [(Story) => Story()],
}

export default meta

export const Default: StoryObj<ComposeStorySampleType> = {
    args: {
        label: 'Sample Button',
    },
}
