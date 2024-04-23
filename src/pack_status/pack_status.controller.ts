import { Controller, Get, Param, Put, Body, Post, HttpStatus, Res, BadRequestException, Delete } from '@nestjs/common';
import { PackStatusService } from './pack_status.service';
import { Response } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { PackStatus } from './pack_status.model';
import { SetPackStatusDto } from './dto/set-pack-status.dto';


@Controller('pack-status')
export class PackStatusController {
    constructor(private readonly packStatusService: PackStatusService) { }

    @Get()
    async getPackStatus(): Promise<PackStatus> {
        return await this.packStatusService.getStatus();
        // return res.status(HttpStatus.OK).json(status);
    }

    @Post()
    async createTimer(
        @Body() dto: SetPackStatusDto,
    ): Promise<void> {
        try {
           return  await this.packStatusService.startTimer(dto.timeLeft);
        } catch (error) {
            throw new BadRequestException({message: "Invalid input data"})
        }
    }

    @Delete()
    async stopTimer(){
        return await this.packStatusService.stopTimer();
    }
}
