import { Job } from "../interfaces/Job";

export function calculateTotalHours(jobs: Job[]): number {
    return jobs.reduce((total, job) => total + parseInt(job["Tempo estimado"]), 0);
}
