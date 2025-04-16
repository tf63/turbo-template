import path from 'node:path'

export default (plop) => {
    plop.setHelper('extractFilename', (filePath) => path.basename(filePath))
    plop.setHelper('extractReponame', (filePath) => filePath.split('/')[1])

    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'list',
                name: 'repo',
                message: 'Please select the repository name',

                // Add the path to the apps to the options according to the project
                choices: [
                    'packages/ui/src/components',
                    'apps/next/src/features',
                    'apps/react/src/features',
                    'apps/react-chrome/src/features',
                ],
            },
            {
                type: 'input',
                name: 'path',
                message: 'Please enter the component path (e.g. layout/nav-sidebar)',
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
                path: '{{repo}}/{{path}}/{{kebabCase (extractFilename path)}}.spec.tsx',
                templateFile: 'templates/components/component.spec.tsx.hbs',
            },
            {
                type: 'add',
                path: '{{repo}}/{{path}}/{{kebabCase (extractFilename path)}}.stories.tsx',
                templateFile: 'templates/components/component.stories.tsx.hbs',
            },
        ],
    })
}
