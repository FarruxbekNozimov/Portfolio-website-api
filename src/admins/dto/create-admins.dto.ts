import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminsDto {
  @ApiProperty({ example: '123' })
  username: string;

  @ApiProperty({ example: '123' })
  password: string;
}
