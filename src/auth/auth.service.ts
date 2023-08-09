import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { LoginDto } from './dto/login-user.dto';
import { AdminsService } from '../admins/admins.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto, res: Response) {
    const { username, password } = loginDto;
    const admin = await this.adminsService.findOneLogin(username);
    if (!admin) throw new BadRequestException("Bunday foydalanuvchi yo'q");

    const isMatchPass = await bcrypt.compare(password, admin.password);
    if (!isMatchPass) throw new BadRequestException('Login yoki parol xato');

    const { token } = await this.getToken(admin.id, 'ADMIN');

    const response = { msg: 'Muvaffaqiyatli kirdingiz', admin, token };
    return response;
  }

  private async getToken(id: string, role: string) {
    const payload = { id, role };
    return {
      token: await this.jwtService.signAsync(payload, {
        secret: process.env.TOKEN_KEY,
        expiresIn: process.env.TOKEN_TIME,
      }),
    };
  }
}
