import express from "express";
import { latestAttendedClasses, monthlyAttendance } from "../controller/attendance";

const router = express.Router();

router.get('/monthly/:studentId', monthlyAttendance);

router.get('/latest/:studentId', latestAttendedClasses);

export default router;