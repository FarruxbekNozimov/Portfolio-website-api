import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education, EducationDocument } from './schemas/education.schema';

@Injectable()
export class EducationService {
  constructor(
    @InjectModel(Education.name)
    private eduModel: Model<EducationDocument>,
  ) {}

  async create(createEducationDto: CreateEducationDto) {
    const res = await new this.eduModel(createEducationDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.eduModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.eduModel.findById(id).exec();
  }

  async update(id: string, updateEducationDto: UpdateEducationDto) {
    return this.eduModel
      .findByIdAndUpdate(id, updateEducationDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.eduModel.findByIdAndDelete(id).exec();
  }
}
