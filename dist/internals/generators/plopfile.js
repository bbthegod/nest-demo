"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
const api_1 = require("./api");
function plop(plop) {
    plop.setGenerator('API', api_1.apiGenerator);
    plop.setActionType('prettify', (answers, config) => {
        const data = config.data;
        console.log(`Running: yarn prettify --write ${data.path} && yarn prettify src/routes.ts`);
        shelljs_1.default.exec(`yarn prettify --write ${data.path} && yarn prettify src/routes.ts`, { silent: true });
        return '';
    });
    plop.setHelper('upperCase', (txt) => txt.toUpperCase());
    plop.setHelper('lowerCase', (txt) => txt.toLowerCase());
}
exports.default = plop;
//# sourceMappingURL=plopfile.js.map