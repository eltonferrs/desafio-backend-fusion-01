import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUser } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() user: LoginUser) {
    return this.authService.login(user.username, user.password);
  }
}