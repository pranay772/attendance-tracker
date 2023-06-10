import Sequelize, { Op } from "sequelize";
import { Attendance } from "../models/attendance";
import { Student } from "../models/student";

export const getStudentsBelowThreshold = async () => {
    const threshold = 0.85;
    const students = Student.findAll({
        include: [
            {
                model: Attendance,
                attributes: [],
                where: {
                status: 'present',
                },
            },
        ],
        group: ['Student.id'],
        having: Sequelize.literal(`COUNT(CASE WHEN "Attendances"."status" = 'present' THEN 1 END) / COUNT(*) < ${threshold}`)
    })

    return students;
}