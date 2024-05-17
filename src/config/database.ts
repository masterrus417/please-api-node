import dotenv from 'dotenv';
dotenv.config();

// Объявление типов для переменных окружения
const dbName: string = process.env.DB_NAME!;
const dbUser: string = process.env.DB_USER!;
const dbPass: string = process.env.DB_PASS!;
const dbHost: string = process.env.DB_HOST!;
const dbPort: number = parseInt(process.env.DB_PORT!, 10);

import { Sequelize } from 'sequelize';

// Инициализация базы данных
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'postgres',
    port: dbPort,
    logging: false,
});

export default sequelize;