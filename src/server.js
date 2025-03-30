import app from './app.js';

const PORT = process.env.PORT || 8000;

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log('Listening on server: ', PORT);
    });
}

// Export the Express app for Vercel
export default app;
