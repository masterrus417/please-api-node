// app.js
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import sequelize  from './config/database';
import { auth_user } from './models/auth/auth_user';
import authRouter from './routes/authRoutes';


const app: Application = express();
const port = 3000;

// Инициализация моделей
auth_user.initModel(sequelize);


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
app.use('/auth', authRouter);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

