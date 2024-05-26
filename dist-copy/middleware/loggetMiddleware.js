"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Создаем директорию для логов, если её нет
const logsDir = path_1.default.join(__dirname, '..', 'logs');
if (!fs_1.default.existsSync(logsDir)) {
    fs_1.default.mkdirSync(logsDir);
}
// Создаем write stream для записи логов в файл
const logFile = fs_1.default.createWriteStream(path_1.default.join(__dirname, '..', 'logs', 'requests.log'), { flags: 'a' });
// Middleware для логирования запросов
const requestLogger = (req, res, next) => {
    const { method, url } = req;
    const now = new Date();
    const logMessage = `[${now.toISOString()}] ${method} ${url}\n`;
    // Логирование в консоль
    console.log(logMessage);
    // Логирование в файл
    logFile.write(logMessage);
    // Переход к следующему middleware
    next();
};
exports.default = requestLogger;
