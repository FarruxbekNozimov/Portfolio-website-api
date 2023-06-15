import { Injectable } from '@nestjs/common';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';
import { Comments, CommentsDocument } from './schemas/comments.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UserAgent from 'user-agents';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name)
    private orderModel: Model<CommentsDocument>,
  ) {}

  async create(
    headers: { 'user-agent': string },
    createCommentsDto: CreateCommentsDto,
  ) {
    const res = await new this.orderModel(createCommentsDto).save();
    return res;
  }

  async findAll(headers: { 'user-agent': string }, query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async findByPostId(id: string) {
    return this.orderModel.find({ post_id: id }).exec();
  }

  async update(id: string, updateCommentsDto: UpdateCommentsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateCommentsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
