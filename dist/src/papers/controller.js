"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PapersController = void 0;
const common_1 = require("@nestjs/common");
const papers_service_1 = require("./papers.service");
const create_paper_dto_1 = require("./dto/create-paper.dto");
const update_paper_dto_1 = require("./dto/update-paper.dto");
let PapersController = class PapersController {
    constructor(papersService) {
        this.papersService = papersService;
    }
    create(createPaperDto) {
        return this.papersService.create(createPaperDto);
    }
    findAll() {
        return this.papersService.findAll();
    }
    findOne(id) {
        return this.papersService.findOne(+id);
    }
    update(id, updatePaperDto) {
        return this.papersService.update(+id, updatePaperDto);
    }
    remove(id) {
        return this.papersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_paper_dto_1.CreatePaperDto !== "undefined" && create_paper_dto_1.CreatePaperDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], PapersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PapersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PapersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof update_paper_dto_1.UpdatePaperDto !== "undefined" && update_paper_dto_1.UpdatePaperDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PapersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PapersController.prototype, "remove", null);
PapersController = __decorate([
    (0, common_1.Controller)('papers'),
    __metadata("design:paramtypes", [typeof (_c = typeof papers_service_1.PapersService !== "undefined" && papers_service_1.PapersService) === "function" ? _c : Object])
], PapersController);
exports.PapersController = PapersController;
//# sourceMappingURL=controller.js.map