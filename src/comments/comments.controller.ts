import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  Req,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create comments' })
  @Post()
  create(@Body() createCommentsDto: CreateCommentsDto) {
    return this.commentsService.create(createCommentsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all comments' })
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one comments' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get comments with post id' })
  @Get('/post/:id')
  findOneByPostId(@Param('id') id: string) {
    return this.commentsService.findByPostId(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update comments by id' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommentsDto: UpdateCommentsDto,
  ) {
    return this.commentsService.update(id, updateCommentsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete comments by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
