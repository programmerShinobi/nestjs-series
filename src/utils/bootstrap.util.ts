import {
  INestApplication,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SerializerInterceptor } from './serializer.interceptor';
import validationOptionsUtil from './validation-options.util';

// for swagger documentation builder it takes application and gives back us with setup
export const documentationBuilder = (
  app: INestApplication,
  configService: ConfigService,
) => {
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(configService.get('app.name'))
    .setDescription('The Shinobi API description')
    .setVersion('1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};

// some global implementation in one function like URI versioning, global pipe and interceptor
export const createApplication = (app: INestApplication) => {
  app.enableShutdownHooks();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalInterceptors(new SerializerInterceptor());
  app.useGlobalPipes(new ValidationPipe(validationOptionsUtil));

  return app;
};
