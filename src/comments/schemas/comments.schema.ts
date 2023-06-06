import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CommentsDocument = HydratedDocument<Comments>;

@Schema({ timestamps: true })
export class Comments {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Users'  }])
	user_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	time:string;

	@Prop()
	content:string;

	;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
