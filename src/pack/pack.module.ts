import { Module } from '@nestjs/common';
import { PackController } from './pack.controller';
import { DatabaseModule } from 'repository/database.module';
import { PackDocument, PackSchema } from 'src/schemas/pack.schema';
import { PackRepository } from './pack.repository';
import { PackService } from './pack.service';

@Module({
    imports: [DatabaseModule.forFeature([
      { name: PackDocument.name, schema: PackSchema },
    ]),],
    controllers: [PackController],
    providers: [PackService, PackRepository],
    exports: [PackService],
})

export class PackModule { }
