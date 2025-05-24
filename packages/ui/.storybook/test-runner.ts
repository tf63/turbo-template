import { type TestRunnerConfig, getStoryContext } from '@storybook/test-runner'
import { checkA11y, configureAxe, injectAxe } from 'axe-playwright'

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
    // https://zenn.dev/sterashima78/articles/a4b48c8baee778
    async prepare({ page, browserContext, testRunnerConfig }) {
        const targetURL = 'http://host.docker.internal:6009'
        const iframeURL = new URL('iframe.html', targetURL).toString()

        if (testRunnerConfig?.getHttpHeaders) {
            const headers = await testRunnerConfig.getHttpHeaders(iframeURL)
            await browserContext.setExtraHTTPHeaders(headers)
        }

        await page.goto(iframeURL, { waitUntil: 'load' }).catch((err) => {
            if (err.message?.includes('ERR_CONNECTION_REFUSED')) {
                const errorMessage = `Could not access the Storybook instance at ${targetURL}. Are you sure it's running?\n\n${err.message}`
                throw new Error(errorMessage)
            }

            throw err
        })
    },
    async preVisit(page) {
        // Inject Axe utilities in the page before the story renders
        await injectAxe(page)
    },
    async postVisit(page, context) {
        // Get entire context of a story, including parameters, args, argTypes, etc.
        // https://github.com/storybookjs/test-runner?tab=readme-ov-file#getstorycontext
        const storyContext = await getStoryContext(page, context)

        // Do not test a11y for stories that disable a11y
        // https://github.com/storybookjs/test-runner?tab=readme-ov-file#accessibility-testing
        if (storyContext.parameters?.a11y?.disable) {
            return
        }

        // Apply story-level a11y rules
        await configureAxe(page, {
            rules: storyContext.parameters?.a11y?.config?.rules,
        })
        // in Storybook 6.x, the selector is #root
        await checkA11y(page, '#storybook-root', {
            detailedReport: true,
            detailedReportOptions: {
                html: true,
            },
            // pass axe options defined in @storybook/addon-a11y
            axeOptions: storyContext.parameters?.a11y?.options,
        })
    },
}

export default config
