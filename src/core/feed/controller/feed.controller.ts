import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { CreateFeedDto, UpdateFeedDto } from '../dto/feed.dto';
import { PostFeedInterface } from '../interfaces/feed-post.interface';
import { FeedService } from '../service/feed.service';

@ApiTags('Feed Routes')
@Controller()
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('feed/all')
  @ApiOperation({ summary: 'get all feed' })
  getAllFeed() : Observable<PostFeedInterface[]> 
  {
    return this.feedService.FindAllFeed();
  }

  @Get('feeds')
  @ApiOperation({ summary: 'get all feed' })
  findSelectedFeed(@Query('take') take:number = 1,@Query('skip') skip:number = 1) : Observable<PostFeedInterface[]> 
  {
    take = take>20 ? 20 :take;
    return this.feedService.FindFeed(take, skip);
  }

  @Get('feed/:id')
  @ApiOperation({ summary: 'get one feed' })
  getOneFeed(@Param('id') id:number) : Observable<PostFeedInterface> 
  {
    return this.feedService.FindOneFeed(id);
  }

  @Post('feed')
  @ApiOperation({ summary: 'create a new feed' })
  PostFeed(@Body() body: CreateFeedDto ) : Observable<PostFeedInterface>
  {
    return this.feedService.CreatePostFeed(body);
  }

  @Put('feed/edit/:id')
  @ApiOperation({ summary: 'update already feed' })
  UpdatePostFeed(@Param('id') id:number, @Body() body: UpdateFeedDto ) : Observable<PostFeedInterface>
  {
    return this.feedService.UpdatePostFeed(body,id);
  }

  @Delete('feed/delete/:id')
  @ApiOperation({ summary: 'delete feed' })
  DeletePostFeed(@Param('id') id:number) : Observable<PostFeedInterface>
  {
    return this.feedService.DeletePostFeed(id);
  }
}
