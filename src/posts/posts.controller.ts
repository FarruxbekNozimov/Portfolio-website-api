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
import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/create-posts.dto';
import { UpdatePostsDto } from './dto/update-posts.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';
import { AdminGuards } from '../guards/admin.guards';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create posts' })
  @Post()
  create(@Body() createPostsDto: CreatePostsDto) {
    return this.postsService.create(createPostsDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all posts' })
  @Get()
  findAll(@Query() query: any) {
    return this.postsService.findAll(query);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one posts' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update posts by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostsDto: UpdatePostsDto) {
    return this.postsService.update(id, updatePostsDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete posts by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
