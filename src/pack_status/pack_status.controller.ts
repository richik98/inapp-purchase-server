import { Controller, Get, Param, Put, Body, Post, HttpStatus, Res } from '@nestjs/common';
import { PackStatusService } from './pack_status.service';
import { Response } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { PackStatus } from './pack_status.model';


@Controller('pack-status')
export class PackStatusController {
    constructor(private readonly packStatusService: PackStatusService) { }

    @Get()
    async getPackStatus(@Res() res): Promise<PackStatus> {
        const status = await this.packStatusService.getStatus();
        return res.status(HttpStatus.OK).json(status);
    }

    @Post()
    async setPackStatus(
        @Body() { status, timeLeft }: PackStatus,
        @Res() res,
    ): Promise<void> {
        try {
            await this.packStatusService.setStatus(status, timeLeft);
            res.status(HttpStatus.CREATED).send();
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
        }
    }


}
