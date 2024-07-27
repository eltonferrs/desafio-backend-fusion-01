import { Injectable } from '@nestjs/common';

@Injectable()
export class CharaterService {
  getHello(): string {
    return 'Serve do personagem!!';
  }
}
