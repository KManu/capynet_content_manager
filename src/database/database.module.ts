import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseProvider } from './database.provider';

@Module({
  providers: [DatabaseService, DatabaseProvider]
})
export class DatabaseModule {}
