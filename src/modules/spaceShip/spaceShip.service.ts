import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { shipCreate } from './dtos/space-ship.dto';
import { SpaceShips } from '@prisma/client';
import { Create } from './entities/space-ship.entities';

@Injectable()
export class SpaceShipService {
  constructor(private prisma: PrismaService){}

  async createShip(data: shipCreate): Promise<SpaceShips> {
    const newShip = new Create()
    Object.assign(newShip,{...data})
    const ship = await this.prisma.spaceShips.create({data: {
      ...newShip
    }})

    return ship;
  }
  async getShips(): Promise<SpaceShips[]> {
    return this.prisma.spaceShips.findMany();
  }
}
