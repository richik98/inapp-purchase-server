import { Controller, Get, Param, Body, Post, BadRequestException, Delete, Query } from '@nestjs/common';
import { SetPackStatusDto } from './dto/set-pack-status.dto';
import { PackDocument } from 'src/schemas/pack.schema';
import { PackService } from './pack.service';

@Controller('pack-status')
export class PackController {
    constructor(private readonly packStatusService: PackService) { }

    //@Get(':id')
    // async findPack(@Param('id') packId: string): Promise<PackDocument> {
    //     return await this.packStatusService.getStatus(packId);
    // }

    @Get()
    async findPack(@Query('packName') packName: string): Promise<PackDocument> {
        return await this.packStatusService.getStatus(packName);
    }

    @Post()
    async createTimer(
        @Body() dto: SetPackStatusDto,
    ): Promise<PackDocument> {
        try {
            return await this.packStatusService.startTimer(dto.expireTime, dto.packName);
        } catch (error) {
            throw new BadRequestException({ message: "Invalid input data" })
        }
    }

    @Delete(':packName')
    async stopTimer(@Param('packName') packName: string) {
        return await this.packStatusService.stopTimer(packName);
    }
}
