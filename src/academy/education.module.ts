import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Education, EducationSchema } from './schemas/education.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Education.name, schema: EducationSchema },
    ]),
    JwtModule,
  ],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}
