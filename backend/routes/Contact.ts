// backend/routes/contact.ts
import express, { Request, Response } from 'express';
import ExcelJS from 'exceljs';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import Contact from '../models/Contact';
import { connectToDatabase } from '../lib/mongodb';

const router = express.Router();

const sendExcelToAdmin = async (): Promise<void> => {
  try {
    const contacts = await Contact.find();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Contacts');

    worksheet.columns = [
      { header: 'First Name', key: 'firstName', width: 20 },
      { header: 'Last Name', key: 'lastName', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 20 },
      { header: 'Role', key: 'role', width: 25 },
      { header: 'Message', key: 'message', width: 40 },
      { header: 'Created At', key: 'createdAt', width: 25 },
    ];

    contacts.forEach((contact: any) => {
      worksheet.addRow({
        ...contact.toObject(),
        createdAt: contact.createdAt?.toLocaleString() || '',
      });
    });

    const filePath = path.join(__dirname, '../contacts.xlsx');
    await workbook.xlsx.writeFile(filePath);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: '📥 New Contact Form Submissions',
      text: 'Attached is the latest contact data from the form.',
      attachments: [{ filename: 'contacts.xlsx', path: filePath }],
    });

    fs.unlinkSync(filePath);
    console.log('✅ Excel sent to admin.');
  } catch (error: any) {
    console.error('❌ Error sending Excel to admin:', error.message);
  }
};

// ✅ POST: Save contact and email Excel
router.post('/', async (req: Request, res: Response) => {
  try {
    await connectToDatabase();

    const { firstName, lastName, email, phone, role, message } = req.body;

    const newContact = new Contact({ firstName, lastName, email, phone, role, message });
    await newContact.save();

    await sendExcelToAdmin();

    res.status(201).json({ success: true, message: 'Form submitted and Excel emailed to admin.' });
  } catch (error: any) {
    console.error('❌ Error saving contact:', error.message);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
});

// ✅ GET: Export contacts
router.get('/export', async (_req: Request, res: Response) => {
  try {
    await connectToDatabase();

    const contacts = await Contact.find();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Contacts');

    worksheet.columns = [
      { header: 'First Name', key: 'firstName', width: 20 },
      { header: 'Last Name', key: 'lastName', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 20 },
      { header: 'Role', key: 'role', width: 25 },
      { header: 'Message', key: 'message', width: 40 },
      { header: 'Created At', key: 'createdAt', width: 25 },
    ];

    contacts.forEach((contact: any) => {
      worksheet.addRow({
        ...contact.toObject(),
        createdAt: contact.createdAt?.toLocaleString() || '',
      });
    });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=contacts.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error: any) {
    console.error('❌ Excel export error:', error.message);
    res.status(500).send('Failed to export contacts');
  }
});

export default router;
