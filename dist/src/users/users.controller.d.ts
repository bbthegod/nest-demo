import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        data: import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
    findAll(): Promise<{
        data: any;
    }>;
    findOne(id: string): Promise<{
        data: import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        data: import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
    remove(id: string): Promise<{
        data: import("./entities/user.entity").User & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
}
