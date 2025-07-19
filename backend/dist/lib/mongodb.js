import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import dotenv from 'dotenv';
import { connectToDatabase } from './lib/mongodb'; // <-- use the utility

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('public/uploads'));

import contactRoutes from './routes/Contact';
app.use('/api/contact', contactRoutes);

import applyRoutes from './routes/apply';
app.use('/api', applyRoutes); // POST /api/apply

// Connect DB and start server
connectToDatabase()
  .then(() => {
    app.listen(5000, () => {
      console.log('🚀 Server running at http://localhost:5000');
    });
  })
  .catch((err) => {
    console.error('❌ DB connection failed:', err);
  });

// CRON job
import sendContactReport from './utils/sendEmailWithExcel';
cron.schedule('0 8 * * *', () => {
  console.log('⏰ Running scheduled contact report email (8 AM)');
  sendContactReport();
});
