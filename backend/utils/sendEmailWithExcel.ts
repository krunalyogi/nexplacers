import ExcelJS from 'exceljs';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact';

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

    contacts.forEach((contact) => {
      worksheet.addRow({
        ...contact.toObject(),
        createdAt: contact.createdAt?.toLocaleString() || '',
      });
    });

    const arrayBuffer = await workbook.xlsx.writeBuffer();
    const buffer = Buffer.from(arrayBuffer); // ✅ Fix here

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPass = process.env.ADMIN_EMAIL_PASS;

    if (!adminEmail || !adminPass) {
      throw new Error('Missing ADMIN_EMAIL or ADMIN_EMAIL_PASS in .env');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: adminEmail,
        pass: adminPass,
      },
    });

    await transporter.sendMail({
      from: adminEmail,
      to: adminEmail,
      subject: 'New Contact Form Submissions',
      text: 'Here is the updated Excel file with contact submissions.',
      attachments: [
        {
          filename: 'contacts.xlsx',
          content: buffer,
          contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      ],
    });

    console.log('📧 Email sent to admin with Excel file');
  } catch (error: any) {
    console.error('❌ Failed to send Excel to admin:', error.message);
  }
};

export default sendExcelToAdmin;
