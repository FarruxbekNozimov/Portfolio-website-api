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
  Req,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Create comments' })
  @Post()
  create(@Req() req, @Body() createCommentsDto: CreateCommentsDto) {
    return this.commentsService.create(req, createCommentsDto);
  }

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all comments' })
  @Get()
  findAll(@Req() req, @Query() query: any) {
    console.log(req.headers, req.connection, req.connection.remoteAddress);
    const ipAddress =
      req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ipAddress);
    return this.commentsService.findAll(req, query);
  }

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one comments' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Get comments with post id' })
  @Get('/post/:id')
  findOneByPostId(@Param('id') id: string) {
    return this.commentsService.findByPostId(id);
  }

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Update comments by id' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommentsDto: UpdateCommentsDto,
  ) {
    return this.commentsService.update(id, updateCommentsDto);
  }

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete comments by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
