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
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

@ApiTags('About')
@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create about' })
  @Post()
  create(@Body() createAboutDto: CreateAboutDto) {
    return this.aboutService.create(createAboutDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all about' })
  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one about' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update about by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAboutDto: UpdateAboutDto) {
    return this.aboutService.update(id, updateAboutDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete about by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutService.remove(id);
  }
}
