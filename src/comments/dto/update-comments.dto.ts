import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentsDto {
  @ApiProperty({ example: '647f272de1e22bf813b31d03' })
  user_id?: string;

  @ApiProperty({ example: "Zo'r chiqibdi barakalla !" })
  content?: string;

  @ApiProperty({ example: '647f27ba53f2ff4375e50b14' })
  post_id?: string;
}
