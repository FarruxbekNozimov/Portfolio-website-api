import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type WorkDocument = HydratedDocument<Work>;

@Schema({ timestamps: true })
export class Work {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  start_time: string;

  @Prop()
  end_time: string;
}

export const WorkSchema = SchemaFactory.createForClass(Work);
