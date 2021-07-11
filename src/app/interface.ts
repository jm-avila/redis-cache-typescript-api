import 'express';
import { CacheEngineType } from '../plugins';

declare module 'express-serve-static-core' {
    interface Request {
        cache: CacheEngineType;
    }
}
