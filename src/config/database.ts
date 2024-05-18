import dotenv from 'dotenv';
import { initModels as initPlsModels } from '../models/pls/init-models';
import { initModels as initAuthModels } from '../models/auth/init-models';
import { Sequelize } from 'sequelize';
dotenv.config();

// Объявление типов для переменных окружения
const dbName: string = process.env.DB_NAME!;
const dbUser: string = process.env.DB_USER!;
const dbPass: string = process.env.DB_PASS!;
const dbHost: string = process.env.DB_HOST!;
const dbPort: number = parseInt(process.env.DB_PORT!, 10);



// Инициализация базы данных
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'postgres',
    port: dbPort,
    logging: false,
});

const modelsAuth = initAuthModels(sequelize);
const modelsPls = initPlsModels(sequelize)

export { sequelize, modelsAuth, modelsPls};