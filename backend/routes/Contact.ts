// backend/routes/Contact.ts
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import ContactModel from '../models/Contact'; // your Contact schema
import sendContactReport from '../utils/sendEmailWithExcel'; // optional daily report (cron still calls this)

const router = express.Router();

/* GET test route so you can open in browser */
router.get('/', (_req: Request, res: Response) => {
  res.send('Contact API is working');
});

/* POST: create contact */
router.post('/', async (req: Request, res: Response) => {
  try {
    console.log('📨 Incoming contact submission:', req.body);
    console.log('🔌 Mongoose readyState:', mongoose.connection.readyState); // 1 = connected

    // Basic body validation (you can expand)
    const { firstName, lastName, email, phone, role, message } = req.body || {};
    if (!firstName || !lastName || !email || !phone || !role || !message) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const doc = await ContactModel.create({
      firstName,
      lastName,
      email,
      phone,
      role,
      message,
    });

    console.log('✅ Contact saved:', doc._id);

    // (Optional) trigger async report/email if you want immediate mail per submission
    // await sendContactReport(); // Uncomment if desired

    return res.status(201).json({ success: true, id: doc._id });
  } catch (err: any) {
    console.error('❌ Contact save error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router;
