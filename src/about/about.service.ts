import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { About, AboutDocument } from './schemas/about.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AboutService {
  constructor(
    @InjectModel(About.name)
    private aboutModel: Model<AboutDocument>,
  ) {}

  async create(createAboutDto: CreateAboutDto) {
    const res = await new this.aboutModel(createAboutDto).save();
    return res;
  }

  async findAll() {
    const res = await this.aboutModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.aboutModel.findById(id).exec();
  }

  async update(id: string, updateAboutDto: UpdateAboutDto) {
    return this.aboutModel
      .findByIdAndUpdate(id, updateAboutDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.aboutModel.findByIdAndDelete(id).exec();
  }
}
