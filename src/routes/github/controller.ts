import { Request, Response } from 'express';
import fetch from 'node-fetch';

export const getByUserName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userName } = req.params;

        const cachedData = await req.cache?.get(userName);

        if (cachedData) {
            res.send(cachedData);
            return;
        }

        const response = await fetch(`https://api.github.com/users/${userName}`);

        if (response.status >= 300) throw Error('Opps');

        const data = await response.text();

        await req.cache?.save(userName, data);

        res.send(data);
    } catch (err) {
        console.error(err);
    }
};

export const deleteAll = async (req: Request, res: Response): Promise<void> => {
    const deleted = await req.cache?.deleteAll();
    res.send({ deleted });
};

export const deleteByUserName = async (req: Request, res: Response): Promise<void> => {
    const { userName } = req.params;
    const deleted = await req.cache?.delete(userName);
    res.send({ deleted });
};
