import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configLoads } from '../config/index.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigFactory } from '../database/typeorm.factory';

const modules = [];

const typeOrmConfig = new TypeOrmConfigFactory().createTypeOrmOptions();

export const global_modules = [
  ConfigModule.forRoot({
    load: configLoads,
    isGlobal: true,
    envFilePath: ['.env'],
  }),
  TypeOrmModule.forRoot(typeOrmConfig),
];

@Module({
  imports: [...global_modules, ...modules],
  controllers: [],
  providers: [],
})
export class AppModule {}
