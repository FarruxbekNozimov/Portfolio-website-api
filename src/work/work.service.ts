import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work, WorkDocument } from './schemas/work.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel(Work.name)
    private workModel: Model<WorkDocument>,
  ) {}

  async create(createWorkDto: CreateWorkDto) {
    const res = await new this.workModel(createWorkDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.workModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.workModel.findById(id).exec();
  }

  async update(id: string, updateWorkDto: UpdateWorkDto) {
    return this.workModel
      .findByIdAndUpdate(id, updateWorkDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.workModel.findByIdAndDelete(id).exec();
  }
}
