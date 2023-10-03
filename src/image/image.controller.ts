import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { Response } from 'express';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageValidationPipe } from '../pipes/image-validation.pipe';

@ApiTags('Image')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @ApiOperation({ summary: 'Get all images' })
  @Get()
  async findAll(@Res() res: Response) {
    try {
      const imageNames = await this.imageService.findAll();
      return res.json(imageNames);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch image names' });
    }
  }

  @ApiOperation({ summary: 'Create new image' })
  @ApiResponse({ status: 200 })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
          description: 'Image file to upload',
        },
      },
    },
  })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @UploadedFile(new ImageValidationPipe()) image: Express.Multer.File,
  ) {
    return this.imageService.create(image);
  }

  @ApiOperation({ summary: 'Get Image by file name' })
  @ApiResponse({ status: 200 })
  @Get(':fileName')
  async findOne(@Param('fileName') fileName: string, @Res() res: Response) {
    return this.imageService.findOne(fileName, res);
  }
}
