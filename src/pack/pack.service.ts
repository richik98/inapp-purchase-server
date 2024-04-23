import { Injectable, NotFoundException } from '@nestjs/common';
import { PackDocument } from 'src/schemas/pack.schema';
import { PackRepository } from './pack.repository';

@Injectable()
export class PackService {
   constructor(private readonly packRepository: PackRepository){}
    async getStatus(id: string): Promise<PackDocument> {
        const pack = await this.packRepository.findOne({_id: id});       
        if(!pack || pack.expireTime < Math.floor(new Date().getTime() / 1000))
            throw new NotFoundException({message: `Pack with id ${id} not found or expired`})
        return pack;
    }

    async startTimer(expireTime: number) {
        return await this.packRepository.create({expireTime: expireTime})
    }

    public async stopTimer(id: string){
        return await this.packRepository.findOneAndDelete({_id: id})
    }
}
