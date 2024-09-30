import { composeStories } from '@storybook/react'

import * as stories from './violation-card.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders ViolationCard component', async () => {
    await Default.run()
})
