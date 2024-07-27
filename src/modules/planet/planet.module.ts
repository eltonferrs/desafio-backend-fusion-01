import { Module } from '@nestjs/common';
import { PlanetController  } from './planet.controller';
import { PlanetService } from './planet.service';

@Module({
  imports: [],
  controllers: [PlanetController],
  providers: [PlanetService],
})
export class PlanetModule {}
