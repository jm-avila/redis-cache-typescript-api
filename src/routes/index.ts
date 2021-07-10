import { Router } from 'express';
import PingRouter from './ping';
import GithubRouter from './github';

const router = Router();

router.use('/ping', PingRouter);
router.use('/github', GithubRouter);

export default router;
