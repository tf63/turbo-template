import { getJestConfig } from '@storybook/test-runner'

type TestRunnerJestConfig = ReturnType<typeof getJestConfig>

const config: TestRunnerJestConfig = {
    ...getJestConfig(),
    // https://zenn.dev/sterashima78/articles/a4b48c8baee778
    testEnvironmentOptions: {
        'jest-playwright': {
            connectOptions: {
                chromium: {
                    wsEndpoint: 'ws://127.0.0.1:3000',
                },
            },
        },
    },
}

export default config
