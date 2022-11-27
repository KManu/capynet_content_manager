import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerProvider } from './crawler.provider';

describe('CrawlerProvider', () => {
  let provider: CrawlerProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerProvider],
    }).compile();

    provider = module.get<CrawlerProvider>(CrawlerProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
