import dotenv from 'dotenv';
import { initModels as initPlsModels } from '../models/pls/init-models';
import { initModels as initAuthModels } from '../models/auth/init-models';
import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
dotenv.config();

// Объявление типов для переменных окружения
const dbName: string = process.env.DB_NAME!;
const dbUser: string = process.env.DB_USER!;
const dbPass: string = process.env.DB_PASS!;
const dbHost: string = process.env.DB_HOST!;
const dbPort: number = parseInt(process.env.DB_PORT!, 10);



const logsDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}


let queryCount = 0;
const logFile = fs.createWriteStream(path.join(__dirname, '..', 'logs', 'sql.log'), { flags: 'a' });

// Инициализация базы данных
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'postgres',
    port: dbPort,
    logging: (msg) => {
      logFile.write(`${msg}\n`); // Запись в файл
      queryCount++;
    }
});

const modelsAuth = initAuthModels(sequelize);
const modelsPls = initPlsModels(sequelize)

export { sequelize, modelsAuth, modelsPls};