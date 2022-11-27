import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { grpcClientOptions } from './grpc-client-options';
import { RedditCrawlerModule } from './reddit-crawler/reddit-crawler.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod', '.env'],
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'staging').default('development'),
        PORT: Joi.number().default(8000),
        REDDIT_USER_AGENT: Joi.string().default(''),
        REDDIT_CLIENT_ID: Joi.string().default(''),
        REDDIT_CLIENT_SECRET: Joi.string().default(''),
        REDDIT_USERNAME: Joi.string().default(''),
        REDDIT_PASSWORD: Joi.string().default('')
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      }
    }),
    RedditCrawlerModule,
    GrpcReflectionModule.register(grpcClientOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
