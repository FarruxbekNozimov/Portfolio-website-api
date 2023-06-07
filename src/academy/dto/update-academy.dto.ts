import { ApiProperty } from '@nestjs/swagger';

export class UpdateAcademyDto {
  @ApiProperty({ example: "Najot Ta'lim" })
  name?: string;

  @ApiProperty({ example: '2021-2023' })
  time?: string;

  @ApiProperty({ example: 'NodeJS + VudeJS FullStack' })
  description?: string;
}
