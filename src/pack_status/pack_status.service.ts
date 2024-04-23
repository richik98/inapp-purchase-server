import { Injectable } from '@nestjs/common';
import { PackStatus } from './pack_status.model';


@Injectable()
export class PackStatusService {
    private currentStatus: PackStatus; // Initial inactive state
    constructor(){
        this.currentStatus = { status: false,  timeLeft: 0}
    }
    async getStatus(): Promise<PackStatus> {
        return this.currentStatus;
        // return { status: false,  timeLeft: 0};
    }

    // async setStatus(timeLeft: number): Promise<void> {
    //     // Update status and optionally start timer
    //     // if (timeLeft) 
    //         this.startTimer(timeLeft);
    // }

    async startTimer(timeLeft: number) {
        // const timeout = timeLeft * 60 * 60 * 1000; // Convert hours to milliseconds
        const timeout = timeLeft; // Convert hours to milliseconds
        this.currentStatus.status = true;

        setTimeout(async () => {
            try {
                // await this.setStatus(true); // Set to inactive after timeout
                // this.currentStatus.status = false
                await this.stopTimer()
            } catch (error) {
                console.error('Error setting status to inactive:', error);
            }
        }, timeout);
    }

    public async stopTimer(){
        return this.currentStatus.status = false
    }


}
