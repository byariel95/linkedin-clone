import { 
  Body,  
  Controller, 
  Delete, 
  Get, 
  Param, 
  ParseIntPipe, 
  Post, 
  Put, 
  Query
 } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { CreateFeedDto, UpdateFeedDto } from '../../common/dtos/feed.dto';
import { FeedService } from '../service/feed.service';
import { PostFeed } from '../../../domain/models/';

@ApiTags('Feed Routes')
@Controller()
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('feed/all')
  @ApiOperation({ summary: 'get all feed' })
  getAllFeed() : Observable<Partial<PostFeed[]>> 
  {
    return this.feedService.FindAllFeed();
  }

  @Get('feeds')
  @ApiOperation({ summary: 'get all feed' })
  findSelectedFeed(@Query('take',ParseIntPipe) take:number = 1,@Query('skip',ParseIntPipe) skip:number = 1) : Observable<Partial<PostFeed[]>> 
  {
    take = take>20 ? 20 :take;
    return this.feedService.FindFeed(take, skip);
  }


  @Get('feed/:id')
  @ApiOperation({ summary: 'get one feed' })
  getOneFeed(@Param('id',ParseIntPipe) id:number) :Observable<Partial<PostFeed>>
  {
    return this.feedService.FindOneFeed(id);
  }

  @Post('feed')
  @ApiOperation({ summary: 'create a new feed' })
  PostFeed(@Body() body: CreateFeedDto ) : Observable<Partial<PostFeed>>
  {
    return this.feedService.CreatePostFeed(body);
  }

  @Put('feed/edit/:id')
  @ApiOperation({ summary: 'update already feed' })
  UpdatePostFeed(@Param('id',ParseIntPipe)  id:number, @Body() body: UpdateFeedDto ) : Observable<Partial<PostFeed>>
  {
    return this.feedService.UpdatePostFeed(body,id);
  }

  @Delete('feed/delete/:id')
  @ApiOperation({ summary: 'delete feed' })
  DeletePostFeed(@Param('id',ParseIntPipe) id:number) : Observable<Partial<PostFeed>>
  {
    return this.feedService.DeletePostFeed(id);
  }
}
