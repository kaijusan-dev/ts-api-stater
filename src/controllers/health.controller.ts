import { type Request, type Response } from 'express';
import * as healthService from '../services/health.service.js';

export const health = (req: Request, res: Response) => {
    const result =  healthService.getHealth();
    res.json(result);
}