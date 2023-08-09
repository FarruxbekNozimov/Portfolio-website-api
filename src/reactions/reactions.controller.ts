import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ReactionsService } from './reactions.service';
import { CreateReactionsDto } from './dto/create-reactions.dto';
import { UpdateReactionsDto } from './dto/update-reactions.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

@ApiTags('Reactions')
@Controller('reactions')
export class ReactionsController {
  constructor(private readonly reactionsService: ReactionsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create reactions' })
  @Post()
  create(@Body() createReactionsDto: CreateReactionsDto) {
    return this.reactionsService.create(createReactionsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all reactions' })
  @Get()
  findAll() {
    return this.reactionsService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one reactions' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reactionsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update reactions by id' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateReactionsDto: UpdateReactionsDto,
  ) {
    return this.reactionsService.update(id, updateReactionsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete reactions by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reactionsService.remove(id);
  }
}
