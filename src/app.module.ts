import { Module } from '@nestjs/common';
import { PackStatusController } from './pack_status/pack_status.controller';
import { PackStatusService } from './pack_status/pack_status.service';
import { PackStatusModule } from './pack_status/pack_status.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [PackStatusModule],
  // controllers: [AppController, PackStatusController],
  // providers: [AppService, PackStatusService],
})
export class AppModule { }
