import { Response, Request, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction): void => {
    req.cache = { test: '' };
    next();
};
