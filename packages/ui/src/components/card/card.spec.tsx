import { composeStories } from '@storybook/react'

import * as stories from './card.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders Card component', async () => {
    await Default.run()
})
