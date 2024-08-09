import { Module } from '@nestjs/common';
import { SpaceShipController  } from './spaceShip.controller';
import { SpaceShipService } from './spaceShip.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [SpaceShipController],
  providers: [SpaceShipService, PrismaService],
})
export class SpaceCraftModule {}
