/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User extends Document {
    username: string;
    password: string;
    role: string;
    status: number;
    List: () => any;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any, any>;
