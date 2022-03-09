import { ConflictException, InternalServerErrorException, NotFoundException, Param, Query } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

  async create(createUserDto: CreateUserDto) {
    try {
      if (await this.userModel.findOne({ username: createUserDto.username })) {
        throw new ConflictException('User already exists');
      }
      let user = new this.userModel({
        username: createUserDto.username,
        password: createUserDto.password,
        role: createUserDto.role,
      });
      user = await user.save();
      return { data: user };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(@Query() query) {
    try {
      const { limit = 50, skip = 0, filter, sort } = query;
      const users = await this.userModel.List({ limit, skip, filter, sort });
      return { data: users };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userModel.findById(id)
      if (!user) {
        throw new NotFoundException();
      }
      return { data: user };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new NotFoundException();
      }
      user.username = updateUserDto.username;
      user.password = updateUserDto.password;
      user.role = updateUserDto.role;
      await user.save();
      return { data: user };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: string) {
    try {
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new NotFoundException();
      }
      user.remove();
      return { data: user };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
