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
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Work')
@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Create work' })
  @Post()
  create(@Body() createWorkDto: CreateWorkDto) {
    return this.workService.create(createWorkDto);
  }

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all work' })
  @Get()
  findAll() {
    return this.workService.findAll();
  }

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one work' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workService.findOne(id);
  }

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Update work by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.workService.update(id, updateWorkDto);
  }

  // UseGuards(JwtAuthGuard);
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete work by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workService.remove(id);
  }
}
