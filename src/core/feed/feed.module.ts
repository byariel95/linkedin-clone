import { Module } from '@nestjs/common';
import { FeedService } from './service/feed.service';
import { FeedController } from './controller/feed.controller';
import { PrismaService } from '../common/services/prisma.service';

@Module({
  controllers: [FeedController],
  providers: [FeedService, PrismaService]
})
export class FeedModule {}
