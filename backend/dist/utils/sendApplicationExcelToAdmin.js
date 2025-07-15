"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exceljs_1 = __importDefault(require("exceljs"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const Application_1 = __importDefault(require("../models/Application"));
const sendApplicationExcelToAdmin = async () => {
    try {
        const applications = await Application_1.default.find();
        const workbook = new exceljs_1.default.Workbook();
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
    }
    catch (error) {
        console.error('❌ Failed to send Application Excel:', error.message);
    }
};
exports.default = sendApplicationExcelToAdmin;
