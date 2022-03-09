"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validation_1 = require("express-validation");
const validation_1 = require("./validation");
const controller = require("./controller");
const authentication_1 = require("../../middleware/authentication");
const router = express_1.default.Router();
router
    .route('/')
    .get((0, authentication_1.default)(['user', 'admin']), controller.list)
    .post((0, authentication_1.default)(['user', 'admin']), (0, express_validation_1.validate)(validation_1.default.create), controller.create);
router
    .route('/:Id')
    .get((0, authentication_1.default)(['user', 'admin']), controller.get)
    .put((0, authentication_1.default)(['user', 'admin']), (0, express_validation_1.validate)(validation_1.default.update), controller.update)
    .delete((0, authentication_1.default)(['user', 'admin']), controller.remove);
router.param('Id', controller.load);
exports.default = router;
//# sourceMappingURL=route.js.map