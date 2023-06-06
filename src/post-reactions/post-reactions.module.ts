import { Module } from '@nestjs/common';
import { PostReactionsService } from './post-reactions.service';
import { PostReactionsController } from './post-reactions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostReactions, PostReactionsSchema } from './schemas/post-reactions.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PostReactions.name, schema: PostReactionsSchema }]),
    JwtModule,
  ],
  controllers: [PostReactionsController],
  providers: [PostReactionsService],
})
export class PostReactionsModule {}
