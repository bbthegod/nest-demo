"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
exports.default = {
    create: {
        body: express_validation_1.Joi.object({
            title: express_validation_1.Joi.string().required(),
            content: express_validation_1.Joi.string().required(),
        }),
    },
    update: {
        body: express_validation_1.Joi.object({
            title: express_validation_1.Joi.string().required(),
            content: express_validation_1.Joi.string().required(),
        }),
        params: express_validation_1.Joi.object({
            Id: express_validation_1.Joi.string().hex().required(),
        }),
    },
};
//# sourceMappingURL=validation.js.map