import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillTypeDto {
  @ApiProperty({ example: 'Backend' })
  name: string;
}
