import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { LoginDto } from './dto/login-user.dto';
import { AdminsService } from '../admins/admins.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto, res: Response) {
    const { username, password } = loginDto;
    const admins = await this.adminsService.findOneLogin(username);
    if (!admins) {
      throw new HttpException(
        { msg: `Bunday foydalanuvchi yo'q !!!` },
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatchPass = await bcrypt.compare(password, admins.password);
    if (!isMatchPass) {
      throw new UnauthorizedException({
        msg: `Parol yoki Login xato kiritilgan !!!`,
      });
    }
    const tokens = await this.getToken(admins.id, 'ADMIN');

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.adminsService.update(admins.id, {
      token: hashed_refresh_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      status: 200,
      msg: 'Muvaffaqiyatli kirdingiz',
      admins: updatedUser,
      tokens,
    };
    return response;
  }

  async loginUser(loginDto: LoginDto, res: Response) {
    const { username, password } = loginDto;
    const users = await this.usersService.findOneLogin(username);
    if (!users) {
      throw new HttpException(
        { msg: `Bunday foydalanuvchi yo'q !!!` },
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatchPass = await bcrypt.compare(password, users.password);
    if (!isMatchPass) {
      throw new UnauthorizedException({
        msg: `Parol yoki Login xato kiritilgan !!!`,
      });
    }
    const tokens = await this.getToken(users.id, 'USER');

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.usersService.update(users.id, {
      token: hashed_refresh_token,
    });

    res.cookie('token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      status: 200,
      msg: 'Muvaffaqiyatli kirdingiz',
      admins: updatedUser,
      tokens,
    };
    return response;
  }

  private async getToken(id: string, role: string) {
    const payload = { id, role };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return { access_token: accessToken, refresh_token: refreshToken };
  }
}
