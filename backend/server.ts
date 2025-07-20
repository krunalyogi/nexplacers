// backend/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cron from 'node-cron';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

/* ------------------------------------------------------------------
   CORS: open for now (debug). Later replace "*" with your frontend URL.
------------------------------------------------------------------- */
app.use(
  cors({
    origin: '*', // e.g., ["https://your-frontend.com"] when you lock down
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

/* Parse JSON bodies (Contact form) */
app.use(express.json());

/* Serve uploaded resumes */
app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));

/* Root health check */
app.get('/', (_req, res) => {
  res.send('Backend API is running!');
});

/* Routes */
import contactRoutes from './routes/Contact'; // POST /api/contact
app.use('/api/contact', contactRoutes);

import applyRoutes from './routes/apply'; // POST /api/apply
app.use('/api', applyRoutes);

/* MongoDB connect (IMPORTANT: correct DB) */
mongoose
  .connect(process.env.MONGO_URI!, { dbName: 'nexplacers' })
  .then(() => {
    console.log('✅ Connected to MongoDB (db=nexplacers)');
    const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
  })
  .catch((err: any) => console.error('❌ MongoDB connection error:', err));

/* Diagnostics */
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to DB:', mongoose.connection.name);
});
mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

/* Cron job: daily contact report at 08:00 IST-ish (UTC depends on host) */
import sendContactReport from './utils/sendEmailWithExcel';
cron.schedule('0 8 * * *', () => {
  console.log('⏰ Running scheduled contact report email (8 AM)');
  sendContactReport();
});
