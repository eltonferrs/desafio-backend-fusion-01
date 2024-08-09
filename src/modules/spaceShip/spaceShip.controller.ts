import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SpaceShipService } from './spaceShip.service';
import { shipCreate } from './dtos/space-ship.dto';


@Controller("spaceships")
export class SpaceShipController {
  constructor(private readonly appService: SpaceShipService) {}

  @Get()
  getHello() {
    return this.appService.getShips();
  }

  @Post()
  create(@Body() data: shipCreate){
    return this.appService.createShip(data)
  } 
}
