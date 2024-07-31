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
                // appsのパスはプロジェクトに応じて選択肢に追加する
                choices: ['packages/ui', 'apps/next/features'],
            },
            {
                type: 'input',
                name: 'path',
                message: 'Please enter the component path (e.g. components/button)',
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
