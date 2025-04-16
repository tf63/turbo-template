import { setProjectAnnotations } from '@storybook/react'

import '@testing-library/jest-dom/vitest'

import previewAnnotations from '@repo/storybook/config/preview.tsx'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll } from 'vitest'

const annotations = setProjectAnnotations([{ ...previewAnnotations, decorators: [] }])

afterEach(() => {
    cleanup()
})

beforeAll(annotations.beforeAll)
