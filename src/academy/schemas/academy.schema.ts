import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AcademyDocument = HydratedDocument<Academy>;

@Schema({ timestamps: true })
export class Academy {
  @Prop()
	name:string;

	@Prop()
	time:string;

	@Prop()
	description:string;

	;
}

export const AcademySchema = SchemaFactory.createForClass(Academy);
