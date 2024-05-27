import { Request, Response, NextFunction } from 'express';
interface JwtPayload {
    id: number;
    username: string;
}
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
