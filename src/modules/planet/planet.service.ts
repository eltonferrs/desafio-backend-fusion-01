import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma,Planets,} from '@prisma/client';

@Injectable()
export class PlanetService {
  constructor(private prisma: PrismaService){}

  async createPlanet(data: any): Promise<Planets> {
    return data
  }

  async getPlanets(): Promise<Planets[]> {
    return this.prisma.planets.findMany()
  }
}
