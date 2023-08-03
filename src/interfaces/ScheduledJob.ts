import { Job } from "./Job";

interface ScheduledJob {
    jobs: Job[];
    totalHours: number;
}

export { ScheduledJob }