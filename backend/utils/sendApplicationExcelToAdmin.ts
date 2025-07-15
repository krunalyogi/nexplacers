import ExcelJS from 'exceljs';
import nodemailer from 'nodemailer';
import Application from '../models/Application';

const sendApplicationExcelToAdmin = async (): Promise<void> => {
  try {
    const applications = await Application.find();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Applications');

    worksheet.columns = [
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'LinkedIn', key: 'linkedin', width: 30 },
      { header: 'Message', key: 'message', width: 40 },
      { header: 'Role', key: 'role', width: 25 },
      { header: 'Resume Path', key: 'resumePath', width: 40 },
      { header: 'Submitted At', key: 'createdAt', width: 25 },
    ];

    applications.forEach((app) => {
      worksheet.addRow({
        ...app.toObject(),
        createdAt: app.createdAt?.toLocaleString() || '',
      });
    });

    // ✅ Correct way to generate Excel buffer
    const arrayBuffer = await workbook.xlsx.writeBuffer();
    const buffer = Buffer.from(arrayBuffer); // This is a valid Node.js Buffer

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
      subject: 'New Job Applications',
      text: 'Attached is the latest Excel report of applications.',
      attachments: [
        {
          filename: 'applications.xlsx',
          content: buffer,
          contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
      ],
    });

    console.log('📧 Application Excel sent to admin!');
  } catch (error: any) {
    console.error('❌ Failed to send Application Excel:', error.message);
  }
};

export default sendApplicationExcelToAdmin;
