"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiGenerator = exports.routePath = exports.baseGeneratorPath = exports.APIProptNames = void 0;
const pluralize_1 = require("pluralize");
const path_1 = require("path");
const utils_1 = require("../utils");
var APIProptNames;
(function (APIProptNames) {
    APIProptNames["name"] = "name";
    APIProptNames["singular"] = "singular";
})(APIProptNames = exports.APIProptNames || (exports.APIProptNames = {}));
exports.baseGeneratorPath = path_1.default.join(__dirname, '../../../src/');
exports.routePath = path_1.default.join(__dirname, '../../../src/route.ts');
exports.apiGenerator = {
    description: 'Add an API',
    prompts: [
        {
            type: 'input',
            name: APIProptNames.name,
            message: 'What should it be called?',
        },
    ],
    actions: (data) => {
        const answers = data;
        answers.name = (0, pluralize_1.default)(answers.name);
        answers.singular = pluralize_1.default.singular(answers.name);
        console.log(answers);
        const apiPath = `${exports.baseGeneratorPath}/{{lowerCase ${APIProptNames.name}}}`;
        const typePath = `${exports.baseGeneratorPath}/types/{{properCase ${APIProptNames.name}}}.d.ts`;
        const actualPath = `${exports.baseGeneratorPath}/${answers.name.toLowerCase()}`;
        if ((0, utils_1.pathExists)(actualPath)) {
            throw new Error(`API '${answers.name}' already exists`);
        }
        const actions = [
            {
                type: 'add',
                path: `${apiPath}/controller.ts`,
                templateFile: './api/controller.ts.hbs',
                abortOnFail: true,
            },
        ];
        return actions;
    },
};
//# sourceMappingURL=index.js.map