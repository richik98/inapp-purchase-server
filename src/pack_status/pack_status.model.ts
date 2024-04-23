export interface PackStatus {
    status: number; // 0 (inactive) or 1 (active)
    timeLeft?: number; // Time left in hours (optional for active status)
  }
  