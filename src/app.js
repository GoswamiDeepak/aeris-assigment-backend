import express from 'express';
import vehicalrouter from './routers/vehical.route.js';

const app = express();

app.use(express.json());

app.use('/api/v1/', vehicalrouter);

export default app;
