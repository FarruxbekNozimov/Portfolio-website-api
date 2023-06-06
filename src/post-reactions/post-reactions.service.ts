import { Injectable } from '@nestjs/common';
import { CreatePostReactionsDto } from './dto/create-post-reactions.dto';
import { UpdatePostReactionsDto } from './dto/update-post-reactions.dto';
import {
  PostReactions,
  PostReactionsDocument,
} from './schemas/post-reactions.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostReactionsService {
  constructor(
    @InjectModel(PostReactions.name)
    private orderModel: Model<PostReactionsDocument>,
  ) {}

  async create(createPostReactionsDto: CreatePostReactionsDto) {
    const res = await new this.orderModel(createPostReactionsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().populate('Post');
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updatePostReactionsDto: UpdatePostReactionsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updatePostReactionsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
