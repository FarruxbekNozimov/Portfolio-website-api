import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EducationDocument = HydratedDocument<Education>;

@Schema({ timestamps: true })
export class Education {
  @Prop()
  name: string;

  @Prop()
  time: string;

  @Prop()
  description: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
