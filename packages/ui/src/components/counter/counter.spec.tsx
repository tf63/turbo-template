import { composeStories } from '@storybook/react'

import * as stories from './counter.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders Counter component', async () => {
    await Default.run()
})
