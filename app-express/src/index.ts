import express, { Express, Request, Response } from 'express';
import config from './config';

const app: Express = express();
const port = config.server.port;

app.get('/api/helloworld', (req: Request, res: Response) => {
  res.send({
    message: 'Hello, World!',
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`[server]: Server is running at ${port}`);
});