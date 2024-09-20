import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configLoads } from './modules/config/index.config';

const modules = [];

export const global_modules = [
  ConfigModule.forRoot({
    load: configLoads,
    isGlobal: true,
    envFilePath: ['.env'],
  }),
];

@Module({
  imports: [...global_modules, ...modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
