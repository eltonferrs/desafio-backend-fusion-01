import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
