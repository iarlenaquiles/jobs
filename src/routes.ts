import { Router } from "express";
import { jobController } from "./controllers/JobController";

const router: Router = Router();

//Routes
router.get("/", jobController.get);

export { router };