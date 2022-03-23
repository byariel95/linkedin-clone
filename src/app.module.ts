import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { FeedModule } from './App/feed/feed.module';
import { DatabaseModule } from './App/database/database.module';
import { AuthModule } from './App/auth/auth.module';

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
