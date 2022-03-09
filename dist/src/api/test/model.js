"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TestSchema = new mongoose_1.Schema({
    title: { type: String },
    content: { type: String },
}, { collection: 'tests', timestamps: true });
TestSchema.statics.List = async function ({ skip = 0, limit = 500, sort = { createdAt: -1 }, filter = {} }) {
    const data = await this.find(filter, { createdAt: 0, updatedAt: 0, password: 0 })
        .sort(sort)
        .skip(+skip)
        .limit(+limit)
        .exec();
    const count = await this.find(filter).count();
    return { data, count, limit, skip };
};
exports.default = (0, mongoose_1.model)('Test', TestSchema);
//# sourceMappingURL=model.js.map