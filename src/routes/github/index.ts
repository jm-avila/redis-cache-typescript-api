import { Router } from 'express';
import { getByUserName, deleteAll, deleteByUserName } from './controller';
const router = Router();

router.get('/:userName', getByUserName);
router.delete('/', deleteAll);
router.delete('/:userName', deleteByUserName);

export default router;
