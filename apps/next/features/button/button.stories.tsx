import { Button } from './button'

import type { Meta, StoryObj } from '@storybook/react'

type ButtonType = typeof Button

export default {
    title: 'Button',
    component: Button,
} satisfies Meta<ButtonType>

export const Default: StoryObj<ButtonType> = {
    render: () => <Button />,
}
