import { composeStories } from '@storybook/react'
import { screen } from '@testing-library/react'

import * as stories from './compose-story-sample.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders ComposeStorySample component', async () => {
    await Default.run()

    const buttonElement = screen.getByRole('button')
    expect(buttonElement.textContent).toEqual(Default.args.label)
})
