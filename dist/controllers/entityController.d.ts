import { Request, Response } from "express";
export declare const getEntity: (req: Request, res: Response) => Promise<void>;
export declare const getEntityById: (req: Request, res: Response) => Promise<void>;
export declare const createEntity: (req: Request, res: Response) => Promise<void>;
export declare const deleteEntity: (req: Request, res: Response) => Promise<void>;
export declare const getEntityByType: (req: Request, res: Response) => Promise<void>;
export declare const getEntityByTypeByID: (req: Request, res: Response) => Promise<void>;
export declare const updateEntityAttr: (req: Request, res: Response) => Promise<void>;
