import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';
import * as Snoowrap from 'snoowrap';

@Injectable()
export class RedditCrawlerService {
    private capySubs: Array<string> = [
        'capybara'
    ];

    logger = new Logger('RedditCrawlerService');


    constructor(@Inject('REDDIT_CLIENT') private redditClient: Snoowrap, private config: ConfigService){}

    async getCapySubsTop(sub = 'capybara',postLimit: number = 10){
        try {
            //let results: Snoowrap.Listing<Snoowrap.Submission> = await this.redditClient.getTop(sub,{time: 'all', limit: postLimit});

            let results = await this.redditClient.getHot();
            
            /* for (let index = 0; index < this.capySubs.length; index++) {
                const sub = this.capySubs[index];
                results = await this.redditClient.getTop(sub,{time: 'all', limit: postLimit});
            } */
            
            return results.map(e=> {
                return JSON.stringify({
                    'post_content_url':e?.url,
                    'title': e?.title,
                    'adult': e?.over_18,
                    'reddit_url': 'https://reddit.com'+ e?.permalink
                }) 
            } );
        } catch (error) {
            this.logger.error('Failed to retrieve subreddit content: '+ error);
            return [];
            //throw new Error('Failed to retrieve subreddit content: '+ error);
        }
    }

    
}
