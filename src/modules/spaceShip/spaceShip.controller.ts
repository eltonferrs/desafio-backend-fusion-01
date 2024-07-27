import { Controller, Get } from '@nestjs/common';
import { SpaceShipService } from './spaceShip.service';


@Controller("spaceships")
export class SpaceShipController {
  constructor(private readonly appService: SpaceShipService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
