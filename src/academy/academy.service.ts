import { Injectable } from '@nestjs/common';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';
import { Academy, AcademyDocument } from './schemas/academy.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AcademyService {
  constructor(
    @InjectModel(Academy.name)
    private orderModel: Model<AcademyDocument>,
  ) {}

  async create(createAcademyDto: CreateAcademyDto) {
    const res = await new this.orderModel(createAcademyDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateAcademyDto: UpdateAcademyDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateAcademyDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
