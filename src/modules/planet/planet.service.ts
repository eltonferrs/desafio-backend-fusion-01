import { Injectable } from '@nestjs/common';

@Injectable()
export class PlanetService {
  getHello(): string {
    return 'Serve do planeta!!';
  }
}
