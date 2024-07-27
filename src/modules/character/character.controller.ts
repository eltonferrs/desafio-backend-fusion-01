import { Controller, Get } from '@nestjs/common';
import { CharaterService } from './character.service';

@Controller("characters")
export class CharacterController {
  constructor(private readonly appService: CharaterService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
