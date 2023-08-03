import { Request, Response } from "express";
import { scheduleJobs } from "../utils/scheduleJobs";
import { jobs } from '../data/jobs'

class JobController {
    public get(req: Request, res: Response) {
        const maxHoursPerSchedule = 8;

        const schedules = scheduleJobs(jobs, maxHoursPerSchedule);
        res.json(schedules);
    }
}

export const jobController = new JobController();
