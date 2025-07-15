// backend/routes/apply.ts
import express, { Request, Response } from 'express';
import formidable, { IncomingForm, Fields, Files, File } from 'formidable';
import fs from 'fs';
import path from 'path';
import { connectToDatabase } from '../lib/mongodb';
import Application from '../models/Application';
import sendApplicationExcelToAdmin from '../utils/sendApplicationExcelToAdmin'; // ✅ corrected import

const router = express.Router();

const uploadDir = path.join(__dirname, '..', 'public', 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

router.post('/apply', async (req: Request, res: Response) => {
  const form = new IncomingForm({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
  });

  form.parse(req, async (err: any, fields: Fields, files: Files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ error: 'Form parsing failed' });
    }

    const { name, email, linkedin, message, role } = fields;
    const file = Array.isArray(files.resume) ? files.resume[0] : (files.resume as File | undefined);

    if (!file || file.mimetype !== 'application/pdf') {
      return res.status(400).json({ error: 'Please upload a valid PDF resume' });
    }

    try {
      await connectToDatabase();

      const newApp = await Application.create({
        name: String(name),
        email: String(email),
        linkedin: String(linkedin || ''),
        message: String(message || ''),
        role: String(role),
        resumePath: '/uploads/' + path.basename(file.filepath),
      });

      await sendApplicationExcelToAdmin(); // ✅ use the correct function

      return res.status(200).json({ success: true, appId: newApp._id });
    } catch (error: any) {
      console.error('Database error:', error.message);
      return res.status(500).json({ error: 'Server error' });
    }
  });
});

export default router;
