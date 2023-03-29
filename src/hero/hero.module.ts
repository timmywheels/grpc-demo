import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero', // ['hero', 'hero2']
          protoPath: join(__dirname, './hero.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
        },
      },
    ]),
  ],
  controllers: [HeroController],
})
export class HeroModule {}
