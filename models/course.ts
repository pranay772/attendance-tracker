import { DATE, INTEGER, Sequelize, STRING, UUID, UUIDV4 } from "sequelize";
import db from "../config/db";

export const Course = db.define('courses', {
    id: {
        type: INTEGER,
        // defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: STRING
    },
});