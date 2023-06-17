import { ApiProperty } from '@nestjs/swagger';

export class UpdateWorkDto {
  @ApiProperty({ example: 'Biomedics' })
  name?: string;

  @ApiProperty({ example: 'Andijon shahar Bo`ston tumani' })
  address?: string;

  @ApiProperty({ example: '2022.01.01' })
  start_time?: string;

  @ApiProperty({ example: '2023.01.04' })
  end_time?: string;
}
