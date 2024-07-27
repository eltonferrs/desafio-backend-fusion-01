import { Module } from '@nestjs/common';
import { CharacterModule } from './modules/character/character.module';
import { PlanetModule } from './modules/planet/planet.module';
import { SpaceCraftModule } from './modules/spaceShip/spaceShip.module';

@Module({
  imports: [CharacterModule,PlanetModule,SpaceCraftModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
