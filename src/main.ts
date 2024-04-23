import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as https from 'https';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  const config = new DocumentBuilder()
    .setTitle('CheaterPack API')
    .setDescription('aaaaa')
    .setVersion('1.0')
    .addTag('InApp')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
