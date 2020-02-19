const promptDirectory = require('inquirer-directory');

module.exports = plop => {
    function isComponent(type) {
        return type === 'Functional Component';
    }

    plop.setPrompt('directory', promptDirectory);
    plop.setGenerator('actions', {
        description: 'Generate file types',
        prompts: [
            {
                type: 'list',
                name: 'fileType',
                message: 'What shall we create?',
                choices: [
                    'Functional Component',
                ]
            },
            {
                type: 'input',
                name: 'componentName',
                message: 'What shall we name this component?',
                when: data => {
                    return isComponent(data.fileType);
                }
            },
            {
                basePath: './src',
                type: 'directory',
                name: 'directory',
                message: 'Where shall we put it?'
            }
        ],
        actions: data => {
            if (isComponent(data.fileType)) {
                const actions = [];
                switch (data.fileType) {

                    case 'Functional Component': {
                        actions.push({
                            type: 'add',
                            path: 'src/{{directory}}/{{componentName}}.js',
                            templateFile: 'plop-templates/FunctionalComponent.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/{{directory}}/{{componentName}}.test.js',
                            templateFile: 'plop-templates/ComponentTest.hbs'
                        });

                        actions.push({
                            type: 'add',
                            path: 'src/{{directory}}/{{componentName}}.css',
                            templateFile: 'plop-templates/ComponentCss.hbs'
                        });
                        break;
                    }

                    default:
                }

                return actions;
            }

            return [
                {
                    type: 'add',
                    path: 'src/{{directory}}/{{fileType}}.js',
                    templateFile: 'plop-templates/{{fileType}}.hbs'
                },
                {
                    type: 'add',
                    path: 'src/{{directory}}/{{fileType}}.test.js',
                    templateFile: 'plop-templates/{{fileType}}.test.hbs'
                }
            ];
        }
    });
};
