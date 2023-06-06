import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsersDto {
  @ApiProperty({ example: 'Toshmat' })
  username: string;

  @ApiProperty({ example: '123' })
  password: string;
}
