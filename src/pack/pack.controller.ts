import { Controller, Get, Param, Body, Post, BadRequestException, Delete } from '@nestjs/common';
import { SetPackStatusDto } from './dto/set-pack-status.dto';
import { PackDocument } from 'src/schemas/pack.schema';
import { PackService } from './pack.service';

@Controller('pack-status')
export class PackController {
    constructor(private readonly packStatusService: PackService) { }

    @Get(':id')
    async findPack(@Param('id') packId: string): Promise<PackDocument> {
        return await this.packStatusService.getStatus(packId);
    }

    @Post()
    async createTimer(
        @Body() dto: SetPackStatusDto,
    ): Promise<PackDocument> {
        try {
           return await this.packStatusService.startTimer(dto.expireTime);
        } catch (error) {
            throw new BadRequestException({message: "Invalid input data"})
        }
    }

    @Delete(':id')
    async stopTimer(@Param('id') packId: string){
        return await this.packStatusService.stopTimer(packId);
    }
}
