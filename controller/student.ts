import { Request, Response } from "express";
import { getStudentsBelowThreshold } from "../services/student";

export const studentsBelowThreshold = async (req: Request, res: Response) => {
    try {
        const data = await getStudentsBelowThreshold();
        return res.status(200).json({
            message: "Monthly attendance recieved",
            data,
            success: 'true'
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error,
            success: 'false'
        });
    }
}