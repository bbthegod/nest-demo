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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        try {
            if (await this.userModel.findOne({ username: createUserDto.username })) {
                throw new common_1.ConflictException('User already exists');
            }
            let user = new this.userModel({
                username: createUserDto.username,
                password: createUserDto.password,
                role: createUserDto.role,
            });
            user = await user.save();
            return { data: user };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async findAll(query) {
        try {
            const { limit = 50, skip = 0, filter, sort } = query;
            const users = await this.userModel.List({ limit, skip, filter, sort });
            return { data: users };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async findOne(id) {
        try {
            const user = await this.userModel.findById(id);
            if (!user) {
                throw new common_1.NotFoundException();
            }
            return { data: user };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.userModel.findById(id);
            if (!user) {
                throw new common_1.NotFoundException();
            }
            user.username = updateUserDto.username;
            user.password = updateUserDto.password;
            user.role = updateUserDto.role;
            await user.save();
            return { data: user };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async remove(id) {
        try {
            const user = await this.userModel.findById(id);
            if (!user) {
                throw new common_1.NotFoundException();
            }
            user.remove();
            return { data: user };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
__decorate([
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersService.prototype, "findAll", null);
UsersService = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map