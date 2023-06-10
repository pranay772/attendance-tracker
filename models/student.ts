import { Sequelize, STRING } from "sequelize";
import db from "../config/db";

export const Student = db.define('students', {
    id: {
        type: STRING,
        // defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: STRING
    },
});