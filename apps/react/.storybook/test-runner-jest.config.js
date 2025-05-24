import { getJestConfig } from '@storybook/test-runner'

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
export default {
    ...getJestConfig(),
    testEnvironmentOptions: {
        'jest-playwright': {
            connectOptions: {
                chromium: {
                    wsEndpoint: 'ws://127.0.0.1:3010',
                },
            },
        },
    },
}
