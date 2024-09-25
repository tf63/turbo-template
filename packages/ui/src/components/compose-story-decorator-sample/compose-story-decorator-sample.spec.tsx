import { composeStories } from '@storybook/react'
import { screen } from '@testing-library/react'

import * as stories from './compose-story-decorator-sample.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders ComposeStoryDecoratorSample component', async () => {
    await Default.run()

    const buttonElement = screen.queryByRole('button')
    expect(buttonElement).not.toBeInTheDocument()
})
