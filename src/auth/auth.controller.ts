import {
  Controller,
  Post,
  Body,
  HttpCode,
  Res,
  Param,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { CookieGetter } from '../decorators/cookieGetter.decorator';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login Admin' })
  @HttpCode(200)
  @Post('admins/login')
  login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(loginDto, res);
  }

  @ApiOperation({ summary: 'Login Admin' })
  @HttpCode(200)
  @Post('users/login')
  loginUser(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.loginUser(loginDto, res);
  }
}
