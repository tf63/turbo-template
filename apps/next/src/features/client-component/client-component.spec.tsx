import { composeStories } from '@storybook/react'

import * as stories from './client-component.stories'

stories.default.decorators = []
const { Default } = composeStories(stories)

test('renders ClientComponent component', async () => {
    await Default.run()
})
