import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { FeedModule } from './app/feed/feed.module';
import { DatabaseModule } from './app/database/database.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    FeedModule,
    DatabaseModule,
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
