const path = require('path')

module.exports = (plop) => {
    plop.setHelper('extractFilename', (filePath) => path.basename(filePath))
    plop.setGenerator('component', {
        // オプション名になる
        description: 'Create a new component',
        prompts: [
            {
                type: 'list',
                name: 'repo',
                message: 'Please select the repository name',
                choices: ['apps/next/src', 'apps/react/src', 'packages/ui'],
            },
            {
                type: 'input',
                name: 'path',
                message: 'Please enter the component path:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '{{repo}}/{{path}}/index.tsx',
                templateFile: 'templates/components/index.tsx.hbs',
            },
            {
                type: 'add',
                path: '{{repo}}/{{path}}/{{kebabCase (extractFilename path)}}.tsx',
                templateFile: 'templates/components/component.tsx.hbs',
            },
            {
                type: 'add',
                path: '{{repo}}/{{path}}/{{kebabCase (extractFilename path)}}.mdx',
                templateFile: 'templates/components/component.mdx.hbs',
            },
            {
                type: 'add',
                path: '{{repo}}/{{path}}/{{kebabCase (extractFilename path)}}.stories.tsx',
                templateFile: 'templates/components/component.stories.tsx.hbs',
            },
        ],
    })
}
