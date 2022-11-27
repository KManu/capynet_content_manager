import { Test, TestingModule } from '@nestjs/testing';
import { RedditCrawlerController } from './reddit-crawler.controller';

describe('RedditCrawlerController', () => {
  let controller: RedditCrawlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedditCrawlerController],
    }).compile();

    controller = module.get<RedditCrawlerController>(RedditCrawlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
