import Sequelize, { Op } from "sequelize";
import { Attendance } from "../models/attendance";
import { Course } from "../models/course";
import { Student } from "../models/student";

export const getMonthlyAttendance = async (month: any, year: any, studentId: string) => {
    const attendance = Attendance.findAll({
        where: {
            studentId,
            [Op.and]: [
                Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('date')), month),
                Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('date')), year),
            ]
        },
        attributes: ['status', 'studentId', 'courseId'],
        include: [{
            model: Course,
            attributes: ['name']
        },
        {
            model: Student,
            attributes: ['name']
        }],
    });

    return attendance;
}

export const getLast5AttendedClasses = async (studentId: string) => {
    const attendance = Attendance.findAll({
        where: { 
            studentId,
            status: 'present'
        },
        attributes: ['status', 'date'],
        include: [{
            model: Course,
            attributes: ['name']
        },
        {
            model: Student,
            attributes: ['name']
        }],
        limit: 5,
        order: ['date', 'DESC']
    });

    return attendance;
}