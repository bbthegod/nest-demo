"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathExists = void 0;
const fs_1 = require("fs");
function pathExists(path) {
    return fs_1.default.existsSync(path);
}
exports.pathExists = pathExists;
//# sourceMappingURL=index.js.map