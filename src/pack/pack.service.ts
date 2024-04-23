import { Injectable, NotFoundException } from '@nestjs/common';
import { PackDocument } from 'src/schemas/pack.schema';
import { PackRepository } from './pack.repository';

@Injectable()
export class PackService {
    constructor(private readonly packRepository: PackRepository) { }
    async getStatus(packName: string): Promise<PackDocument> {
        const pack = await this.packRepository.findOne({ packName: packName });
        if (!pack || pack.expireTime < Math.floor(new Date().getTime() / 1000))
            throw new NotFoundException({ message: `Pack with name ${packName} not found or expired` })
        return pack;
    }

    async startTimer(expireTime: number, packName: string) {
        return await this.packRepository.create({ expireTime: expireTime, packName: packName })
    }

    public async stopTimer(packName: string) {
        return await this.packRepository.findOneAndDelete({ packName: packName })
    }
}
