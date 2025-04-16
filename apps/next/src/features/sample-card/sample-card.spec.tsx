import { composeStories } from '@storybook/react'

import * as stories from './sample-card.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders SampleCard component', async () => {
    await Default.run()
})
