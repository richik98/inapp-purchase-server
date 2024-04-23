import { Injectable } from '@nestjs/common';
import { PackStatus } from './pack_status.model';


@Injectable()
export class PackStatusService {
    private currentStatus: PackStatus = { status: 0 }; // Initial inactive state

    async getStatus(): Promise<PackStatus> {
        return this.currentStatus;
    }

    async setStatus(status: number, timeLeft?: number): Promise<void> {
        if (status !== 0 && status !== 1) {
            throw new Error('Invalid pack status value');
        }

        if (status === 1 && !timeLeft) {
            throw new Error('Time left is required for active status');
        }

        // Update status and optionally start timer
        this.currentStatus.status = status;
        if (timeLeft) {
            this.startTimer(timeLeft);
        } else {
            this.currentStatus.timeLeft = undefined; // Clear timeLeft for inactive
        }
    }

    private async startTimer(timeLeft: number) {
        const timeout = timeLeft * 60 * 60 * 1000; // Convert hours to milliseconds

        setTimeout(async () => {
            try {
                await this.setStatus(0); // Set to inactive after timeout
            } catch (error) {
                console.error('Error setting status to inactive:', error);
            }
        }, timeout);
    }


}
