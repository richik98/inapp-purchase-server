import { Module } from '@nestjs/common';
import { DatabaseModule } from 'repository/database.module';
import { PackModule } from './pack/pack.module';

@Module({
  imports: [PackModule, DatabaseModule],
})
export class AppModule {}
