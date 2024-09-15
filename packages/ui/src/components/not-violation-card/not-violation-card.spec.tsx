import { render } from '@testing-library/react'

import { NotViolationCard } from '.'

test('renders NotViolationCard component', () => {
    render(<NotViolationCard text="Not Violation" />)
})
