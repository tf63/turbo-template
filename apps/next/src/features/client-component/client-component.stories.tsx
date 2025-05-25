import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { ClientComponent } from './client-component'

type ClientComponentType = typeof ClientComponent

export default {
    title: 'ClientComponent',
    component: ClientComponent,
    render: (props) => <ClientComponent {...props} />,
    decorators: [(Story: StoryFn) => <Story />],
} satisfies Meta<ClientComponentType>

export const Default: StoryObj<ClientComponentType> = {
    args: {},
}
