import { Controller, Get } from '@nestjs/common';
import { PlanetService } from './planet.service';
import { Planets } from '@prisma/client';

@Controller("planets")
export class PlanetController {
  constructor(private readonly appService: PlanetService) {}

  @Get()
  getHello(): Promise<Planets[]> {
    return this.appService.getPlanets();
  }
}
