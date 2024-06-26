import { ApiProperty } from "@nestjs/swagger";

export class SetPackStatusDto {
    @ApiProperty({ type: Number, description: "Unix timestamp UTC", example: 1713883285 })
    expireTime: number
    @ApiProperty({ type: String, description: "Pack name", example: "cheaterPack" })
    packName: string
}

