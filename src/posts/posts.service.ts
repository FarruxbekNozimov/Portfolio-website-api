import { Injectable } from '@nestjs/common';
import { CreatePostsDto } from './dto/create-posts.dto';
import { UpdatePostsDto } from './dto/update-posts.dto';
import { Posts, PostsDocument } from './schemas/posts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name)
    private orderModel: Model<PostsDocument>,
  ) {}

  async create(createPostsDto: CreatePostsDto) {
    const res = await new this.orderModel(createPostsDto).save();
    return res;
  }

  async findAll() {
    const res = await this.orderModel.find();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updatePostsDto: UpdatePostsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updatePostsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
