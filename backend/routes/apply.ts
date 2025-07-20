// backend/routes/apply.ts
import express, { Request, Response } from 'express';
import formidable, { Fields, Files } from 'formidable';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import ApplicationModel from '../models/Application';
import sendApplicationExcelToAdmin from '../utils/sendApplicationExcelToAdmin'; // if you use it

const router = express.Router();

/* Ensure upload directory exists */
const uploadDir = path.join(__dirname, '..', 'public', 'uploads');
fs.mkdirSync(uploadDir, { recursive: true });

/* GET test route */
router.get('/apply', (_req: Request, res: Response) => {
  res.send('Apply API is working');
});

/* POST: /api/apply */
router.post('/apply', async (req: Request, res: Response) => {
  console.log('📨 Incoming application submission (multipart/form-data)');
  console.log('🔌 Mongoose readyState:', mongoose.connection.readyState); // 1 = connected

  const form = formidable({
    multiples: false,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    uploadDir, // temp save target (we rename below)
    keepExtensions: true,
  });

  form.parse(req, async (err: any, fields: Fields, files: Files) => {
    if (err) {
      console.error('❌ Form parse error:', err);
      return res.status(400).json({ error: 'Invalid form data' });
    }

    try {
      const name = (fields.name?.[0] as string) || '';
      const email = (fields.email?.[0] as string) || '';
      const phone = (fields.phone?.[0] as string) || '';
      const role = (fields.role?.[0] as string) || '';

      if (!name || !email || !phone || !role) {
        return res.status(400).json({ error: 'Missing required fields.' });
      }

      // Handle resume file (expecting single file)
      let resumeUrl: string | undefined;
      const resumeFile = files.resume?.[0];
      if (resumeFile) {
        const originalName = resumeFile.originalFilename || 'resume.pdf';
        const ext = path.extname(originalName) || '.pdf';
        const finalName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
        const finalPath = path.join(uploadDir, finalName);

        try {
          await fs.promises.rename(resumeFile.filepath, finalPath);
          resumeUrl = `/uploads/${finalName}`; // served statically by server.ts
          console.log('📁 Resume stored at:', resumeUrl);
        } catch (moveErr) {
          console.error('❌ File move error:', moveErr);
        }
      }

      const appDoc = await ApplicationModel.create({
        name,
        email,
        phone,
        role,
        resumeUrl, // field name in your schema should match
      });

      console.log('✅ Application saved:', appDoc._id);

      // Optional: send updated Excel to admin
      // await sendApplicationExcelToAdmin(); // uncomment if needed

      return res.status(200).json({ success: true, id: appDoc._id });
    } catch (saveErr: any) {
      console.error('❌ Application save error:', saveErr);
      return res.status(500).json({ error: 'Server error' });
    }
  });
});

export default router;
