import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcryptjs";


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async login(username: string, password: string) {
        const user = await this.userService.findByUsername(username);
        if (!user) {
          throw new UnauthorizedException('Invalid username or password');
        }
    
        const passwordMatch = await compare(password, user.password);
    
        if (!passwordMatch) {
          throw new UnauthorizedException('Invalid username or password');
        }
    
        return {
          token: this.jwtService.sign({ username: username }, { subject: user.id }),
        };
    }
}