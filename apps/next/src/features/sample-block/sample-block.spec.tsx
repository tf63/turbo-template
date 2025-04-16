import { composeStories } from '@storybook/react'

import * as stories from './sample-block.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders SampleBlock component', async () => {
    await Default.run()
})
