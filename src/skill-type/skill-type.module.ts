import { Module } from '@nestjs/common';
import { SkillTypeService } from './skill-type.service';
import { SkillTypeController } from './skill-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillType, SkillTypeSchema } from './schemas/skill-type.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SkillType.name, schema: SkillTypeSchema }]),
    JwtModule,
  ],
  controllers: [SkillTypeController],
  providers: [SkillTypeService],
})
export class SkillTypeModule {}
