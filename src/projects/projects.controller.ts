import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectsDto } from './dto/create-projects.dto';
import { UpdateProjectsDto } from './dto/update-projects.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpCode } from '@nestjs/common';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'Create projects' })
  @Post()
  create(@Body() createProjectsDto: CreateProjectsDto) {
    return this.projectsService.create(createProjectsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find all projects' })
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Get one projects' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Update projects by id' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectsDto: UpdateProjectsDto,
  ) {
    return this.projectsService.update(id, updateProjectsDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Delete projects by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
