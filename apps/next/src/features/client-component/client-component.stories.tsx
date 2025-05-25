import type { Meta, StoryObj } from '@storybook/react'

import { ClientComponent } from './client-component'

type ClientComponentType = typeof ClientComponent

const meta: Meta<ClientComponentType> = {
    title: 'ClientComponent',
    component: ClientComponent,
    render: (props) => <ClientComponent {...props} />,
    decorators: [(Story) => Story()],
}
export default meta

export const Default: StoryObj<ClientComponentType> = {
    args: {},
}
