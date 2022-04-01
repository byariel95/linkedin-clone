import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';
import { AllExceptionFilter } from './app/common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('main');

  const config = app.get(ConfigService);
  const port = parseInt(config.get<string>('PORT'), 10);

  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }));
  app.useGlobalFilters(new AllExceptionFilter());
  initSwagger(app);
  await app.listen(port);
  logger.debug(`Server is running at ${await app.getUrl()}/api/docs`);
}
bootstrap();
