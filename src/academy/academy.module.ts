import { Module } from '@nestjs/common';
import { AcademyService } from './academy.service';
import { AcademyController } from './academy.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Academy, AcademySchema } from './schemas/academy.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Academy.name, schema: AcademySchema }]),
    JwtModule,
  ],
  controllers: [AcademyController],
  providers: [AcademyService],
})
export class AcademyModule {}
