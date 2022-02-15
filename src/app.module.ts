import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { FeedModule } from './App/feed/feed.module';
import { DatabaseModule } from './App/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    FeedModule,
    DatabaseModule
  ],
  controllers: [AppController]
})
export class AppModule {}
