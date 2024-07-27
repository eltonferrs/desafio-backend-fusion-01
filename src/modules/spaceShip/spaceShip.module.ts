import { Module } from '@nestjs/common';
import { SpaceShipController  } from './spaceShip.controller';
import { SpaceShipService } from './spaceShip.service';

@Module({
  imports: [],
  controllers: [SpaceShipController],
  providers: [SpaceShipService],
})
export class SpaceCraftModule {}
