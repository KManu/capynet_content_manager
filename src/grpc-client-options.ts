import { GrpcOptions, Transport } from '@nestjs/microservices';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import { join } from 'path';



export const grpcClientOptions: GrpcOptions = addReflectionToGrpcConfig({
    transport: Transport.GRPC,
    options: {
        package: ['RedditCrawlerPackage', 'ContentManagerPackage'],
        protoPath: [
            join(__dirname, './protos/redditCrawler.proto'),
            join(__dirname, './protos/contentManager.proto'),
        ],
        url: `localhost:3003`
    }
})