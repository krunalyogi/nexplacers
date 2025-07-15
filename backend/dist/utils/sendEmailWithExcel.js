"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exceljs_1 = __importDefault(require("exceljs"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const Contact_1 = __importDefault(require("../models/Contact"));
const sendExcelToAdmin = async () => {
    try {
        const contacts = await Contact_1.default.find();
        const workbook = new exceljs_1.default.Workbook();
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
        const transporter = nodemailer_1.default.createTransport({
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
    }
    catch (error) {
        console.error('❌ Failed to send Excel to admin:', error.message);
    }
};
exports.default = sendExcelToAdmin;
