import { Job } from "../interfaces/Job";
import { ScheduledJob } from "../interfaces/ScheduledJob";

export function scheduleJobs(jobs: Job[], maxHours: number): ScheduledJob[] {
    const sortedJobs = jobs.slice().sort((a, b) => {
      const dateA = new Date(a["Data Máxima de conclusão"]).getTime();
      const dateB = new Date(b["Data Máxima de conclusão"]).getTime();
      return dateA - dateB;
    });
  
    const schedules: ScheduledJob[] = [];
    let currentSchedule: ScheduledJob = { jobs: [], totalHours: 0 };
  
    for (const job of sortedJobs) {
      const jobHours = parseInt(job["Tempo estimado"]);
  
      if (currentSchedule.totalHours + jobHours <= maxHours) {
        currentSchedule.jobs.push(job);
        currentSchedule.totalHours += jobHours;
      } else {
        schedules.push(currentSchedule);
        currentSchedule = { jobs: [job], totalHours: jobHours };
      }
    }
  
    if (currentSchedule.jobs.length > 0) {
      schedules.push(currentSchedule);
    }
  
    return schedules;
  }