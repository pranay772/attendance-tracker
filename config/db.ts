import { Sequelize } from "sequelize";

export default new Sequelize({
    username: process.env.DEV_DB_USERNAME || 'postgres',
    password: process.env.DEV_DB_PASSWORD || '',
    database: process.env.DEV_DB_NAME || 'attendance',
    host: process.env.DEV_DB_HOST || '127.0.0.1',
    port: Number((process.env.DEV_DB_PORT)) || 5432,
  });