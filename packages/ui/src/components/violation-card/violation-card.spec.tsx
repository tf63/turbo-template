import { render } from '@testing-library/react'

import { ViolationCard } from '.'

test('renders ViolationCard component', () => {
    render(<ViolationCard text="Violation" />)
})
