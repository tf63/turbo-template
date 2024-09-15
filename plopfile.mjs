import path from 'node:path'

export default (plop) => {
    plop.setHelper('extractFilename', (filePath) => path.basename(filePath))

    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'list',
                name: 'repo',
                message: 'Please select the repository name',

                // Add the path to the apps to the options according to the project
                choices: ['ui', 'next', 'react', 'react-chrome'],
            },
            {
                type: 'list',
                name: 'type',
                message: 'Please select the component path (packages/*/src/features|components)',

                // Add the path to the apps to the options according to the project
                choices: ['features/', 'components/'],
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
                path: 'packages/{{repo}}/src/{{type}}/{{path}}/index.tsx',
                templateFile: 'templates/components/index.tsx.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{repo}}/src/{{type}}/{{path}}/{{kebabCase (extractFilename path)}}.tsx',
                templateFile: 'templates/components/component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{repo}}/src/{{type}}/{{path}}/{{kebabCase (extractFilename path)}}.spec.tsx',
                templateFile: 'templates/components/component.spec.tsx.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{repo}}/src/{{type}}/{{path}}/{{kebabCase (extractFilename path)}}.stories.tsx',
                templateFile: 'templates/components/component.stories.tsx.hbs',
            },
        ],
    })
}
