import { composeStories } from '@storybook/react'

import * as stories from './not-violation-card.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders NotViolationCard component', async () => {
    await Default.run()
})
