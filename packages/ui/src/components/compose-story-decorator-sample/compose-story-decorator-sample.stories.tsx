import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { ComposeStoryDecoratorSample } from './compose-story-decorator-sample'

type ComposeStoryDecoratorSampleType = typeof ComposeStoryDecoratorSample

export default {
    title: 'Ui/ComposeStoryDecoratorSample',
    component: ComposeStoryDecoratorSample,
    render: (props) => <ComposeStoryDecoratorSample {...props} />,
    decorators: [
        (Story: StoryFn) => (
            <div>
                <button type="button">Decorator</button>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<ComposeStoryDecoratorSampleType>

export const Default: StoryObj<ComposeStoryDecoratorSampleType> = {
    args: {},
}
