import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProjectsDocument = HydratedDocument<Projects>;

@Schema({ timestamps: true })
export class Projects {
  @Prop()
	title:string;

	@Prop()
	preview:string;

	@Prop()
	demo:string;

	@Prop()
	img:string;

	@Prop()
	description:string;

	@Prop()
	tags:string;

	;
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);
