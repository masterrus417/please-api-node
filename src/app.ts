// app.js
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRouter from './routes/authRoutes';
import apiV1 from './routes/apiV1Routers';

const app: Application = express();
const port = 3000;


// Мидлвары
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


// Обработка ошибок
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Конфигурация маршрутов
app.use('/auth', authRouter); // Маршрут для аутентификации
app.use('/api/v1',apiV1); // Маршрут для API


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

