import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

import { Counter } from './counter'

type CounterType = typeof Counter

export default {
    title: 'Ui/Counter',
    component: Counter,
    render: (props) => <Counter {...props} />,
    decorators: (Story: StoryFn) => <Story />,
} satisfies Meta<CounterType>

export const Default: StoryObj<CounterType> = {
    args: {},
    play: async ({ _args, canvasElement }) => {
        const canvas = within(canvasElement)

        // ボタンをクリックする
        await userEvent.click(canvas.getByRole('button', { name: /\+1/i }))

        // カウンタの値を取得する
        const counterValue = canvas.getByText('1') // 初期値が「0」だと仮定し、クリック後の値が「1」であると想定

        // カウンタの値が「1」であることを検証する
        expect(counterValue).toBeInTheDocument()
        expect(counterValue.innerHTML).toBe('1')

        await userEvent.click(canvas.getByRole('button', { name: /\-1/i }))

        // カウンタの値が「0」であることを検証する
        expect(counterValue).toBeInTheDocument()
        expect(counterValue.innerHTML).toBe('0')
    },
}
