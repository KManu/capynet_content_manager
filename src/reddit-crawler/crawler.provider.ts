import { Logger } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import * as snoowrap from 'snoowrap';
import { DatabaseModule } from 'src/database/database.module';

export const CrawlerProvider = [
    {
        provide: 'REDDIT_CLIENT',
        useFactory: async() => {
            let logger = new Logger('CrawlerProviders');
            let config = new ConfigService();

            try {
                const requester: snoowrap = new snoowrap({
                    userAgent: config.get<string>('REDDIT_USER_AGENT'),
                    clientId: config.get<string>('REDDIT_CLIENT_ID'),
                    clientSecret: config.get<string>('REDDIT_CLIENT_SECRET'),
                    username: config.get<string>('REDDIT_USERNAME'),
                    password:config.get<string>('REDDIT_PASSWORD'),
                });
                let configsettings = {
                    userAgent: config.get<string>('REDDIT_USER_AGENT'),
                    clientId: config.get<string>('REDDIT_CLIENT_ID'),
                    clientSecret: config.get<string>('REDDIT_CLIENT_SECRET'),
                    username: config.get<string>('REDDIT_USERNAME'),
                    password:config.get<string>('REDDIT_PASSWORD'),
                };
                //logger.debug('Snoowrap client initialized with: ', configsettings);
                return requester;
            } catch (error) {
                logger.error(`Reddit client instantiation failed`)
                logger.error(error);
            }
            
        },
        inject: [Logger, ConfigService]
    },
    DatabaseModule,
    Logger
]