import express, { type Request, type Response } from 'express';
import {healthRouter} from './routes/health.routes.js';
import {env} from './config/env.js';

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.use('/health', healthRouter);

app.listen(env.PORT, () => {
	console.log(`Server started on port ${env.PORT}`);
});