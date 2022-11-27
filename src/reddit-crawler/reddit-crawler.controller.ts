import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RedditCrawlerRequest, RedditCrawlerResponse } from './crawler.interfaces';
import { RedditCrawlerService } from './reddit-crawler.service';

@Controller('reddit-crawler')
export class RedditCrawlerController {


  constructor(private redditCrawler: RedditCrawlerService) { }

  @GrpcMethod('RedditCrawlerPackage', 'FetchSubHottest')
  async fetchSubHottest(data: RedditCrawlerRequest, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<RedditCrawlerResponse> {
    /* this.redditCrawler.getCapySubsTop()
      .then((data)=>{ 
        data
      })
      .catch((error:Error)=>{
        console.error(`Error while getting the sub's hottest: `, error.message);
      }) */
    try {
      return {
        status: 200,
        data: await this.redditCrawler.getCapySubsTop()
      };
    } catch (err) {
      console.log('Failed to get subs: ', err);
      return {
        status: 500,
        error: {
          message: err?.message
        }
      };
    }

    /* const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return {
      status: 200,
      data: items.map( item =>{ return JSON.stringify(item) } ),
    }; */
  }


}
