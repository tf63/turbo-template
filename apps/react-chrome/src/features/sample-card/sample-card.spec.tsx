import { render } from '@testing-library/react'

import { SampleCard } from '.'

test('renders SampleCard component', () => {
    render(<SampleCard text="SampleCard Component" />)
})
