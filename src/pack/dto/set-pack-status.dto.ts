import { ApiProperty } from "@nestjs/swagger";

export class SetPackStatusDto {
    @ApiProperty({type: Number, description: "Unix timestamp", example: 1713883285})
    expireTime: number
}

