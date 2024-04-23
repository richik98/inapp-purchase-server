import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from 'repository/abstract.repository';
import { PackDocument } from 'src/schemas/pack.schema';

@Injectable()
export class PackRepository extends AbstractRepository<PackDocument> {
  protected readonly logger = new Logger(PackRepository.name);

  constructor(@InjectModel(PackDocument.name) packModel: Model<PackDocument>) {
    super(packModel);
  }
}
