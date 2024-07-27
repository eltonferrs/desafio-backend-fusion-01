import { Injectable } from '@nestjs/common';

@Injectable()
export class SpaceShipService {
  getHello(): string {
    return 'Serve da Nave!!';
  }
}
