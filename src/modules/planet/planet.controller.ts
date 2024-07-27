import { Controller, Get } from '@nestjs/common';
import { PlanetService } from './planet.service';

@Controller("planets")
export class PlanetController {
  constructor(private readonly appService: PlanetService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
