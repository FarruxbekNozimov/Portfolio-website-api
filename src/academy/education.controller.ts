import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

@ApiTags('Education')
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create education' })
  @Post()
  create(@Body() createEducationDto: CreateEducationDto) {
    return this.educationService.create(createEducationDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all education' })
  @Get()
  findAll() {
    return this.educationService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one education' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update education by id' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateEducationDto,
  ) {
    return this.educationService.update(id, updateEducationDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete education by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationService.remove(id);
  }
}
