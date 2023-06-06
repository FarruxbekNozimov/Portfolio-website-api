import { ApiProperty } from '@nestjs/swagger';

export class UpdateSkillTypeDto {
  @ApiProperty({ example: 'Backend' })
  name?: string;
}
