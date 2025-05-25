import { setProjectAnnotations } from '@storybook/react'

import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll } from 'vitest'

import previewAnnotations from '../../.storybook/preview.tsx'

const annotations = setProjectAnnotations([{ ...previewAnnotations, decorators: [] }])

afterEach(() => {
    cleanup()
})

beforeAll(annotations.beforeAll)
