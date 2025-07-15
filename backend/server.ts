// backend/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cron from 'node-cron';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('public/uploads'));

import contactRoutes from './routes/Contact';
app.use('/api/contact', contactRoutes);

import applyRoutes from './routes/apply';
app.use('/api', applyRoutes); // POST /api/apply

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});


mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(5000, () => console.log('🚀 Server running at http://localhost:5000'));
  })
  .catch((err: any) => console.error(err));

import sendContactReport from './utils/sendEmailWithExcel';
cron.schedule('0 8 * * *', () => {
  console.log('⏰ Running scheduled contact report email (8 AM)');
  sendContactReport();
});
