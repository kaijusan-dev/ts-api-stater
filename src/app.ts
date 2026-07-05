import express, { type Express, type Request, type Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.get('/health', (req: Request, res: Response) => {
	res.json({status: 'ok'});
});

const PORT = Number(process.env.PORT || '3000');

app.listen(PORT, () => {
	console.log('Server started on port:', PORT);
});