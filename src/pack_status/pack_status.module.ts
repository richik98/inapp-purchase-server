import { Module } from '@nestjs/common';
import { PackStatusController } from './pack_status.controller';
import { PackStatusService } from './pack_status.service';

@Module({
    controllers: [PackStatusController],
    providers: [PackStatusService],
    exports: [PackStatusService],
})



export class PackStatusModule { }
