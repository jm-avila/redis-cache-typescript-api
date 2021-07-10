import { Response, Request, NextFunction } from 'express';
import { CacheEngine } from '../plugins';
import redisClient from '../redis';

export default (req: Request, res: Response, next: NextFunction): void => {
    if (redisClient) req.cache = new CacheEngine(redisClient, 60);
    next();
};
