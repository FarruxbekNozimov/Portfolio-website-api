import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema({ timestamps: true })
export class Users {
  @Prop()
	username:string;

	@Prop()
	password:string;

	@Prop()
	token:string;

	;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
