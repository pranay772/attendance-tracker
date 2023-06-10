import express from "express";
import { studentsBelowThreshold } from "../controller/student";

const router = express.Router();

router.get('/attendance/below-threshold', studentsBelowThreshold);

export default router;