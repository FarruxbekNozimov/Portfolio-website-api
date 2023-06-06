import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SkillTypeDocument = HydratedDocument<SkillType>;

@Schema({ timestamps: true })
export class SkillType {
  @Prop()
	name:string;

	;
}

export const SkillTypeSchema = SchemaFactory.createForClass(SkillType);
