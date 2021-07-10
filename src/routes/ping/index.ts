import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try {
        return res.status(200).send('pong');
    } catch (err) {
        res.send(err.message);
    }
});

export default router;
