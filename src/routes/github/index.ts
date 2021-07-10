import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

router.get('/repos/:userName', async (req, res) => {
    try {
        const { userName } = req.params;

        const response = await fetch(`https://api.github.com/users/${userName}`);

        if (response.status >= 300) throw Error('Opps');

        const data = await response.text();

        res.send(data);
    } catch (err) {
        console.error(err);
    }
});
