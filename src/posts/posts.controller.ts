import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/create-posts.dto';
import { UpdatePostsDto } from './dto/update-posts.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

@ApiBearerAuth()
@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create posts' })
  @Post()
  create(@Body() createPostsDto: CreatePostsDto) {
    return this.postsService.create(createPostsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all posts' })
  @Get()
  findAll() {
    console.log('findall');
    return this.postsService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one posts' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('findone');
    return this.postsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update posts by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostsDto: UpdatePostsDto) {
    return this.postsService.update(id, updatePostsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete posts by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
