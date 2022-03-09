import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<{
        data: User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
    findAll(query: any): Promise<{
        data: any;
    }>;
    findOne(id: string): Promise<{
        data: User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        data: User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
    remove(id: string): Promise<{
        data: User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
}
