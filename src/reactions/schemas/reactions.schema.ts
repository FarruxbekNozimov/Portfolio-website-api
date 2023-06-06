import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ReactionsDocument = HydratedDocument<Reactions>;

@Schema({ timestamps: true })
export class Reactions {
  @Prop()
	name:string;

	@Prop()
	img:string;

	;
}

export const ReactionsSchema = SchemaFactory.createForClass(Reactions);
