import { Injectable } from '@nestjs/common';
import { CreateSkillTypeDto } from './dto/create-skill-type.dto';
import { UpdateSkillTypeDto } from './dto/update-skill-type.dto';
import { SkillType, SkillTypeDocument } from './schemas/skill-type.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SkillTypeService {
  constructor(
    @InjectModel(SkillType.name)
    private orderModel: Model<SkillTypeDocument>,
  ) {}

  async create(createSkillTypeDto: CreateSkillTypeDto) {
    const res = await new this.orderModel(createSkillTypeDto).save();
    return res;
  }

  async findAll() {
    const res = await this.orderModel.find();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateSkillTypeDto: UpdateSkillTypeDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateSkillTypeDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
