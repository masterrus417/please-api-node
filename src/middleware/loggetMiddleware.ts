import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';


// Создаем директорию для логов, если её нет
const logsDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Создаем write stream для записи логов в файл
const logFile = fs.createWriteStream(path.join(__dirname, '..', 'logs', 'requests.log'), { flags: 'a' });

// Middleware для логирования запросов
const requestLogger = (req: Request, res: Response, next: NextFunction) => {
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

export default requestLogger;