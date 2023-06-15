import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillsDto {
  @ApiProperty({ example: 'NodeJS' })
  title: string;

  @ApiProperty({ example: 'bx bxl-nodejs' })
  icon: string;

  @ApiProperty({ example: '647f28c94474a3b986f9c47c' })
  skill_type_id: string;
}
