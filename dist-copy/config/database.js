"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelsPls = exports.modelsAuth = exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const init_models_1 = require("../models/pls/init-models");
const init_models_2 = require("../models/auth/init-models");
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
// Объявление типов для переменных окружения
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbPort = parseInt(process.env.DB_PORT, 10);
const logsDir = path_1.default.join(__dirname, '..', 'logs');
if (!fs_1.default.existsSync(logsDir)) {
    fs_1.default.mkdirSync(logsDir);
}
let queryCount = 0;
const logFile = fs_1.default.createWriteStream(path_1.default.join(__dirname, '..', 'logs', 'sql.log'), { flags: 'a' });
// Инициализация базы данных
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'postgres',
    port: dbPort,
    logging: (msg) => {
        logFile.write(`${msg}\n`); // Запись в файл
        queryCount++;
    }
});
exports.sequelize = sequelize;
const modelsAuth = (0, init_models_2.initModels)(sequelize);
exports.modelsAuth = modelsAuth;
const modelsPls = (0, init_models_1.initModels)(sequelize);
exports.modelsPls = modelsPls;
