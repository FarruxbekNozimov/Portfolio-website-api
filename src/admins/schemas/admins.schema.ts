import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AdminsDocument = HydratedDocument<Admins>;

@Schema({ timestamps: true })
export class Admins {
  @Prop()
	fullname:string;

	@Prop()
	username:string;

	@Prop()
	password:string;

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

export const AdminsSchema = SchemaFactory.createForClass(Admins);
