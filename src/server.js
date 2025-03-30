import app from './app.js';

const PORT = process.env.PORT || 8000;

// Export the Express app for Vercel
module.exports = app;

// Only listen when not in Vercel environment
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log('Listening on server: ', PORT);
  });
}