import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const log = new Logger(bootstrap.name);
  // create application instance using NestFactory
  const app = await NestFactory.create(AppModule);

  // getting configService from application
  // to fetch port from app.config.ts config load
  const configService = app.get(ConfigService);

  const PORT = configService.get('app.port') || 8000;

  // used the port value here
  await app.listen(PORT);

  log.log(
    `NestJS Series (${process.env.npm_package_version}) start on port ${PORT}`,
  );
}
bootstrap();
