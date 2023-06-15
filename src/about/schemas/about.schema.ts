import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AboutDocument = HydratedDocument<About>;

@Schema({ timestamps: true })
export class About {
  @Prop()
	fullname:string;

	@Prop()
	user_photo:string;

	@Prop()
	description:string;

	@Prop()
	email:string;

	@Prop()
	phone:string;

	@Prop()
	token:string;

	;
}

export const AboutSchema = SchemaFactory.createForClass(About);
