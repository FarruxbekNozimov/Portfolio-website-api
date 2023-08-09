import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SkillTypeService } from './skill-type.service';
import { CreateSkillTypeDto } from './dto/create-skill-type.dto';
import { UpdateSkillTypeDto } from './dto/update-skill-type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

@ApiTags('SkillType')
@Controller('skill-type')
export class SkillTypeController {
  constructor(private readonly skillTypeService: SkillTypeService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create skillType' })
  @Post()
  create(@Body() createSkillTypeDto: CreateSkillTypeDto) {
    return this.skillTypeService.create(createSkillTypeDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all skillType' })
  @Get()
  findAll() {
    return this.skillTypeService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one skillType' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillTypeService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update skillType by id' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSkillTypeDto: UpdateSkillTypeDto,
  ) {
    return this.skillTypeService.update(id, updateSkillTypeDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete skillType by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillTypeService.remove(id);
  }
}
