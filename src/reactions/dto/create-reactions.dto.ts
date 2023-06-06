import { ApiProperty } from '@nestjs/swagger';

export class CreateReactionsDto {
  @ApiProperty({ example: 'Like' })
  name: string;

  @ApiProperty({
    example:
      'https://i.pinimg.com/originals/ac/2c/94/ac2c94f785425c8798b98133b1352648.gif',
  })
  img: string;
}
