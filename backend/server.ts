// server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cron from 'node-cron';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// --- Basic health route so / doesn't show "Cannot GET /" ---
app.get('/', (req, res) => {
  res.send('Backend API is running!');
});

// Middleware
app.use(cors());
app.use(express.json());

// Static file access (resume uploads, etc.)
app.use('/uploads', express.static('public/uploads'));

// Routes
import contactRoutes from './routes/Contact'; // POST /api/contact
app.use('/api/contact', contactRoutes);

import applyRoutes from './routes/apply';     // POST /api/apply
app.use('/api', applyRoutes);

// --- Mongo Connection (IMPORTANT: ensure correct DB) ---
mongoose
  .connect(process.env.MONGO_URI!, { dbName: 'nexplacers' })
  .then(() => {
    console.log('✅ Connected to MongoDB (db=nexplacers)');
    app.listen(5000, () => console.log('🚀 Server running at http://localhost:5000'));
  })
  .catch((err: any) => console.error('❌ MongoDB connection error:', err));

// Diagnostics
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to DB:', mongoose.connection.name);
});
mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

// Cron job (daily contact report @ 08:00)
import sendContactReport from './utils/sendEmailWithExcel';
cron.schedule('0 8 * * *', () => {
  console.log('⏰ Running scheduled contact report email (8 AM)');
  sendContactReport();
});
