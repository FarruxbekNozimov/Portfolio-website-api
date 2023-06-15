import { ApiProperty } from '@nestjs/swagger';

export class CreateAboutDto {
  @ApiProperty({ example: 'Farruxbek' })
  fullname: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/one-app/image/fetch/f_auto,c_limit,w_48,q_auto/https://oneapp-uploads.s3.eu-north-1.amazonaws.com/613ec40d-5aef-433f-8fb3-26c89e957c0e.png',
  })
  user_photo: string;

  @ApiProperty({
    example: 'Hello, men Farruxbek Nozimov. I am NodeJS Backend Developer',
  })
  description: string;

  @ApiProperty({ example: '+998(88)703-80-06' })
  phone: string;

  @ApiProperty({ example: 'farruxbekyusupov@gmail.com' })
  email: string;
}
