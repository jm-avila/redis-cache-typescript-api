import express from 'express';

import { Cache } from '../middleware';
import routes from '../routes';
import './interface';

const app = express();

app.use(Cache);

app.use(routes);

export default app;
