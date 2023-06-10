import { Request, Response } from "express";
import { getLast5AttendedClasses, getMonthlyAttendance } from "../services/attendance";

export const monthlyAttendance = async (req: Request, res: Response) => {
  try {
    const { month, year } = req.query;
    const studentId = req.params.studentId;

    const data = await getMonthlyAttendance(month, year, studentId);
    return res.status(200).json({
      message: "Monthly attendance recieved",
      data,
      success: "true",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
      success: "false",
    });
  }
};

export const latestAttendedClasses = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;

    const data = await getLast5AttendedClasses(studentId);
    return res.status(200).json({
      message: "Last 5 classes' attendance recieved",
      data,
      success: "true",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
      success: "false",
    });
  }
};
