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
import { AcademyService } from './academy.service';
import { CreateAcademyDto } from './dto/create-academy.dto';
import { UpdateAcademyDto } from './dto/update-academy.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';
import { AdminGuards } from '../guards/admin.guards';

@ApiTags('Academy')
@Controller('academy')
export class AcademyController {
  constructor(private readonly academyService: AcademyService) {}

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create academy' })
  @Post()
  create(@Body() createAcademyDto: CreateAcademyDto) {
    return this.academyService.create(createAcademyDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all academy' })
  @Get()
  findAll(@Query() query: any) {
    return this.academyService.findAll(query);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one academy' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academyService.findOne(id);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update academy by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAcademyDto: UpdateAcademyDto) {
    return this.academyService.update(id, updateAcademyDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete academy by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academyService.remove(id);
  }
}
