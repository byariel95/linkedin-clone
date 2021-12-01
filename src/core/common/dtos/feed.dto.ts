import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateFeedDto 
{
    @ApiProperty({ type: String, required: true})
    @IsNotEmpty()
    body : string;
}

export class UpdateFeedDto extends PartialType(CreateFeedDto){}