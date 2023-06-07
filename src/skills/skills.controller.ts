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
import { SkillsService } from './skills.service';
import { CreateSkillsDto } from './dto/create-skills.dto';
import { UpdateSkillsDto } from './dto/update-skills.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';
import { AdminGuards } from '../guards/admin.guards';

@ApiTags('Skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create skills' })
  @Post()
  create(@Body() createSkillsDto: CreateSkillsDto) {
    return this.skillsService.create(createSkillsDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all skills' })
  @Get()
  findAll(@Query() query: any) {
    return this.skillsService.findAll(query);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one skills' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(id);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update skills by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSkillsDto: UpdateSkillsDto) {
    return this.skillsService.update(id, updateSkillsDto);
  }

  @UseGuards(AdminGuards)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete skills by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(id);
  }
}
