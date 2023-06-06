import { Injectable } from '@nestjs/common';
import { CreateReactionsDto } from './dto/create-reactions.dto';
import { UpdateReactionsDto } from './dto/update-reactions.dto';
import { Reactions, ReactionsDocument } from './schemas/reactions.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReactionsService {
  constructor(
    @InjectModel(Reactions.name)
    private orderModel: Model<ReactionsDocument>,
  ) {}

  async create(createReactionsDto: CreateReactionsDto) {
    const res = await new this.orderModel(createReactionsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateReactionsDto: UpdateReactionsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateReactionsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
