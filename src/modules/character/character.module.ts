import { Module } from '@nestjs/common';
import { CharacterController  } from './character.controller';
import { CharaterService } from './character.service';

@Module({
  imports: [],
  controllers: [CharacterController],
  providers: [CharaterService],
})
export class CharacterModule {}
