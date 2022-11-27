import { Test, TestingModule } from '@nestjs/testing';
import { RedditCrawlerService } from './reddit-crawler.service';

describe('RedditCrawlerService', () => {
  let service: RedditCrawlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedditCrawlerService],
    }).compile();

    service = module.get<RedditCrawlerService>(RedditCrawlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
