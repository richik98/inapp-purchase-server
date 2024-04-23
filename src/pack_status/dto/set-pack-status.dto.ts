import { ApiProperty } from "@nestjs/swagger";

export class SetPackStatusDto {
    // @ApiProperty({type: Boolean, description: "Bool value of status", example: true})
    // status: boolean; // 0 (inactive) or 1 (active)
    
    @ApiProperty({type: Number, description: "Time", example: 123123})
    timeLeft: number
}

