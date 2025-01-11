import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import swagerConfig from './swagger/swager.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Config
  const documentFactory = () => SwaggerModule.createDocument(app, swagerConfig);
  SwaggerModule.setup('api', app, documentFactory);
  console.log('process.env.APP_PORT!!', process.env.APP_PORT);
  await app.listen(process.env.APP_PORT ?? 3333);
}
bootstrap();
