import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client-options';

/* async function bootstrap() {
  let config: ConfigService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  await app.listen(config.get<string>('PORT'));
}
bootstrap(); */

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, grpcClientOptions);
  await app.listen();
}
bootstrap();
