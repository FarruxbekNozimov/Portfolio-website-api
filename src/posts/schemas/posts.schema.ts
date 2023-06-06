import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PostsDocument = HydratedDocument<Posts>;

@Schema({ timestamps: true })
export class Posts {
  @Prop()
	title:string;

	@Prop()
	content:string;

	@Prop()
	tags:string;

	;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
