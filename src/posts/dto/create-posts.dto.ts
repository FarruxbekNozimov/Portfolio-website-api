import { ApiProperty } from '@nestjs/swagger';

export class CreatePostsDto {
  @ApiProperty({ example: 'Uzbekistan = Uzbekistan' })
  title: string;

  @ApiProperty({ example: '<h1>Assalomu alaykum everyone</h1>' })
  content: string;

  @ApiProperty({ example: '#nodejs,#backend,#vue' })
  tags: string;
}
