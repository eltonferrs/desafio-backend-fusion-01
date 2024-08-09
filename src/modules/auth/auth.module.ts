import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";


@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: "1h"}
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}