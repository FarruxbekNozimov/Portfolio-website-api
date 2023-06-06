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
// import { JwtAuthGuard } from '../../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('PostReactions')
@Controller('postReactions')
export class PostReactionsController {
  constructor(private readonly postReactionsService: PostReactionsService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create postReactions' })
  @Post()
  create(@Body() createPostReactionsDto: CreatePostReactionsDto) {
    return this.postReactionsService.create(createPostReactionsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all postReactions' })
  @Get()
  findAll(@Query() query: any) {
    return this.postReactionsService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one postReactions' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postReactionsService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update postReactions by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostReactionsDto: UpdatePostReactionsDto) {
    return this.postReactionsService.update(id, updatePostReactionsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete postReactions by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postReactionsService.remove(id);
  }
}
