import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectsDto {
  @ApiProperty({ example: 'Courses simple website' })
  title?: string;

  @ApiProperty({ example: 'https://courses-farruxdev.netlify.app/' })
  preview?: string;

  @ApiProperty({
    example: 'https://github.com/FarruxbekNozimov/megacrm-app-vuejs',
  })
  demo?: string;

  @ApiProperty({
    example:
      'https://upcdn.io/FW25bPH/raw/Screenshot%20from%202023-06-06%2021-58-46.png/',
  })
  img?: string;

  @ApiProperty({ example: 'This project for courses add courses and use this' })
  description?: string;

  @ApiProperty({ example: '#html,#css,#javascript,#bootstrap' })
  tags?: string;
}
