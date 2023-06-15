import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkSchema } from './schemas/work.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Work.name, schema: WorkSchema }]),
    JwtModule,
  ],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
