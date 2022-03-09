/*
 *
 * API Generator
 *
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import pluralize from 'pluralize';
import path from 'path';

import { pathExists } from '../utils';

export enum APIProptNames {
  name = 'name',
  singular = 'singular',
}

type Answers = { [P in APIProptNames]: string };

export const baseGeneratorPath = path.join(__dirname, '../../../src/');
export const routePath = path.join(__dirname, '../../../src/route.ts');

export const apiGenerator: PlopGeneratorConfig = {
  description: 'Add an API',
  prompts: [
    {
      type: 'input',
      name: APIProptNames.name,
      message: 'What should it be called?',
    },
  ],
  actions: (data) => {
    const answers = data as Answers;
    answers.name = pluralize(answers.name);
    answers.singular = pluralize.singular(answers.name);
    console.log(answers);

    const apiPath = `${baseGeneratorPath}/{{lowerCase ${APIProptNames.name}}}`;
    const typePath = `${baseGeneratorPath}/types/{{properCase ${APIProptNames.name}}}.d.ts`;
    const actualPath = `${baseGeneratorPath}/${answers.name.toLowerCase()}`;

    if (pathExists(actualPath)) {
      throw new Error(`API '${answers.name}' already exists`);
    }
    const actions: Actions = [
      {
        type: 'add',
        path: `${apiPath}/controller.ts`,
        templateFile: './api/controller.ts.hbs',
        abortOnFail: true,
      },
      // {
      //   type: 'add',
      //   path: `${apiPath}/model.ts`,
      //   templateFile: './api/model.ts.hbs',
      //   abortOnFail: true,
      // },
      // {
      //   type: 'add',
      //   path: `${apiPath}/route.ts`,
      //   templateFile: './api/route.ts.hbs',
      //   abortOnFail: true,
      // },
      // {
      //   type: 'add',
      //   path: `${apiPath}/validation.ts`,
      //   templateFile: './api/validation.ts.hbs',
      //   abortOnFail: true,
      // },
      // {
      //   type: 'add',
      //   path: `${typePath}`,
      //   templateFile: './api/type.d.ts.hbs',
      //   abortOnFail: true,
      // },
      // {
      //   type: 'prettify',
      //   data: { path: `${actualPath}/**` },
      // },
      // {
      //   type: 'modify',
      //   path: `${routePath}`,
      //   pattern: /(\/\/ GENERATE NEW IMPORT ABOVE, DO NOT DELETE IT)/g,
      //   templateFile: './router/import.hbs',
      //   abortOnFail: true,
      // },
      // {
      //   type: 'modify',
      //   path: `${routePath}`,
      //   pattern: /(\/\/ GENERATE NEW ROUTER ABOVE, DO NOT DELETE IT)/g,
      //   templateFile: './router/router.hbs',
      //   abortOnFail: true,
      // },
    ];
    return actions;
  },
};
