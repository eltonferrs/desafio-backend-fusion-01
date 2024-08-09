import { Module } from '@nestjs/common';
import { CharacterModule } from './modules/character/character.module';
import { PlanetModule } from './modules/planet/planet.module';
import { SpaceCraftModule } from './modules/spaceShip/spaceShip.module';
import { UserModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CharacterModule,PlanetModule,SpaceCraftModule, UserModule,AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
