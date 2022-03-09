import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, enum: ['admin', 'user'], default: 'user' })
    role: string;

    @Prop({ default: 0 })
    status: number;

    List: () => any;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.List = async function ({ skip = 0, limit = 500, sort = { createdAt: -1 }, filter = {} }) {
    const data = await this.find(filter, { createdAt: 0, updatedAt: 0, password: 0, __v: 0 })
        .sort(sort)
        .skip(+skip)
        .limit(+limit)
        .exec();
    const count = await this.find(filter).count();
    return { data, count, limit, skip };
};