import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { PostReactionsService } from './post-reactions.service';
import { CreatePostReactionsDto } from './dto/create-post-reactions.dto';
import { UpdatePostReactionsDto } from './dto/update-post-reactions.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

@ApiTags('PostReactions')
@Controller('postReactions')
export class PostReactionsController {
  constructor(private readonly postReactionsService: PostReactionsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create postReactions' })
  @Post()
  create(@Body() createPostReactionsDto: CreatePostReactionsDto) {
    return this.postReactionsService.create(createPostReactionsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all postReactions' })
  @Get()
  findAll() {
    return this.postReactionsService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one postReactions' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postReactionsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one postReactions' })
  @Get('post/:id')
  findByPostId(@Param('id') id: string) {
    return this.postReactionsService.findByPostId(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update postReactions by id' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostReactionsDto: UpdatePostReactionsDto,
  ) {
    return this.postReactionsService.update(id, updatePostReactionsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete postReactions by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postReactionsService.remove(id);
  }
}
