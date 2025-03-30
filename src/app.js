import express from 'express';
import vehicalrouter from './routers/vehical.route.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Assigment backend.!');
});

// Health check endpoint for Vercel
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
});

app.use('/api/v1/', vehicalrouter);

export default app;
