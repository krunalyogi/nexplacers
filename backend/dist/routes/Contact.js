"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const exceljs_1 = __importDefault(require("exceljs"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Contact_1 = __importDefault(require("../models/Contact"));
const router = express_1.default.Router();
// ✅ Utility: Send Excel to Admin via Email
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
        const filePath = path_1.default.join(__dirname, '../contacts.xlsx');
        await workbook.xlsx.writeFile(filePath);
        const transporter = nodemailer_1.default.createTransport({
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
        fs_1.default.unlinkSync(filePath);
        console.log('✅ Excel sent to admin.');
    }
    catch (error) {
        console.error('❌ Error sending Excel to admin:', error.message);
    }
};
// ✅ POST: Save contact form and email Excel to admin
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, role, message } = req.body;
        const newContact = new Contact_1.default({ firstName, lastName, email, phone, role, message });
        await newContact.save();
        await sendExcelToAdmin();
        res.status(201).json({ success: true, message: 'Form submitted and Excel emailed to admin.' });
    }
    catch (error) {
        console.error('❌ Error saving contact:', error.message);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});
// ✅ GET: Manual export of all contacts as Excel
router.get('/export', async (_req, res) => {
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
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=contacts.xlsx');
        await workbook.xlsx.write(res);
        res.end();
    }
    catch (error) {
        console.error('❌ Excel export error:', error.message);
        res.status(500).send('Failed to export contacts');
    }
});
exports.default = router;
