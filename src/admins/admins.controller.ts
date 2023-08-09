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
import { AdminsService } from './admins.service';
import { CreateAdminsDto } from './dto/create-admins.dto';
import { UpdateAdminsDto } from './dto/update-admins.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Admins')
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create admins' })
  @Post()
  create(@Body() createAdminsDto: CreateAdminsDto) {
    return this.adminsService.create(createAdminsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all admins' })
  @Get()
  findAll() {
    return this.adminsService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one admins' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update admins by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminsDto: UpdateAdminsDto) {
    return this.adminsService.update(id, updateAdminsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete admins by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(id);
  }
}
