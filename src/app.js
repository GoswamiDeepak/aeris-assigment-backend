import express from 'express';
import vehicalrouter from './routers/vehical.route.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Assigment backend.!');
});

app.use('/api/v1/', vehicalrouter);

export default app;
