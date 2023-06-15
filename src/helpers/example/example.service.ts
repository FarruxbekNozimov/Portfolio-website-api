import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { Example, ExampleDocument } from './schemas/example.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ExampleService {
  constructor(
    @InjectModel(Example.name)
    private exampleModel: Model<ExampleDocument>,
  ) {}

  async create(createExampleDto: CreateExampleDto) {
    const res = await new this.exampleModel(createExampleDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.exampleModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.exampleModel.findById(id).exec();
  }

  async update(id: string, updateExampleDto: UpdateExampleDto) {
    return this.exampleModel
      .findByIdAndUpdate(id, updateExampleDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.exampleModel.findByIdAndDelete(id).exec();
  }
}
