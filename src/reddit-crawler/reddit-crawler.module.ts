import { Module } from '@nestjs/common';
import { CrawlerProvider } from './crawler.provider';
import { RedditCrawlerService } from './reddit-crawler.service';
import { RedditCrawlerController } from './reddit-crawler.controller';

@Module({
  providers: [
    RedditCrawlerService, 
    ...CrawlerProvider
  ],
  controllers: [RedditCrawlerController]
})
export class RedditCrawlerModule {}
