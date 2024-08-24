import { render } from '@testing-library/react'

import { Card } from '.'

test('renders Card component', () => {
    render(<Card text="Card Component" />)
})
