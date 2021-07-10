import { Router } from 'express';
import PingRouter from './ping';

const router = Router();

router.use('/ping', PingRouter);

export default router;
