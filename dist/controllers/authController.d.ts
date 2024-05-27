import { Request, Response } from "express";
import UserRequestBody from "../interface/bodyAuth";
export declare const registerUser: (req: Request<UserRequestBody>, res: Response) => Promise<void>;
export declare const login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
