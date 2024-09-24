import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configLoads } from '../config/index.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigFactory } from '../database/typeorm.factory';
import { AuthModule } from '../auth/auth.module';

const modules = [AuthModule];

export const global_modules = [
  ConfigModule.forRoot({
    load: configLoads,
    isGlobal: true,
    envFilePath: ['.env'],
  }),
  TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigFactory,
  }),
];

@Module({
  imports: [...global_modules, ...modules],
  controllers: [],
  providers: [],
})
export class AppModule {}
