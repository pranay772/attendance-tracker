import { DATE, ENUM, INTEGER, Sequelize, STRING, UUID, UUIDV4 } from "sequelize";
import db from "../config/db";

export const Attendance = db.define("attendance", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  studentId: {
    type: STRING,
    references: { model: "students", key: "id" },
  },
  courseId: {
    type: INTEGER,
  },
  date: {
    type: DATE,
    defaultValue: Sequelize.fn("NOW"),
  },
  status: {
    type: ENUM,
    allowNull: false,
    values: ["present", "absent", "late"],
  },
  created_at: {
    type: DATE,
    defaultValue: Sequelize.fn("NOW"),
  },
  updated_at: {
    type: DATE,
    defaultValue: Sequelize.fn("NOW"),
  },
});
