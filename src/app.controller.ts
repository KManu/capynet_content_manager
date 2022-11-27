import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ContentManagerResponse, TestID } from './reddit-crawler/crawler.interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('ContentManagerService', 'HelloThere')
  helloThere(data: TestID, metadata: Metadata, call: ServerUnaryCall<any, any>): ContentManagerResponse {
    const items = [
      { id: 1, name: 'John' },
      { id: 2 },
    ];
    return {
      status: 200,
      data: items
    };
  }

  
}
