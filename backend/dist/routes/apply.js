"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/routes/apply.ts
const express_1 = __importDefault(require("express"));
const formidable_1 = require("formidable");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mongodb_1 = require("../lib/mongodb");
const Application_1 = __importDefault(require("../models/Application"));
const sendApplicationExcelToAdmin_1 = __importDefault(require("../utils/sendApplicationExcelToAdmin")); // ✅ corrected import
const router = express_1.default.Router();
const uploadDir = path_1.default.join(__dirname, '..', 'public', 'uploads');
fs_1.default.mkdirSync(uploadDir, { recursive: true });
router.post('/apply', async (req, res) => {
    const form = new formidable_1.IncomingForm({
        uploadDir,
        keepExtensions: true,
        maxFileSize: 5 * 1024 * 1024, // 5MB
    });
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error('Form parse error:', err);
            return res.status(500).json({ error: 'Form parsing failed' });
        }
        const { name, email, linkedin, message, role } = fields;
        const file = Array.isArray(files.resume) ? files.resume[0] : files.resume;
        if (!file || file.mimetype !== 'application/pdf') {
            return res.status(400).json({ error: 'Please upload a valid PDF resume' });
        }
        try {
            await (0, mongodb_1.connectToDatabase)();
            const newApp = await Application_1.default.create({
                name: String(name),
                email: String(email),
                linkedin: String(linkedin || ''),
                message: String(message || ''),
                role: String(role),
                resumePath: '/uploads/' + path_1.default.basename(file.filepath),
            });
            await (0, sendApplicationExcelToAdmin_1.default)(); // ✅ use the correct function
            return res.status(200).json({ success: true, appId: newApp._id });
        }
        catch (error) {
            console.error('Database error:', error.message);
            return res.status(500).json({ error: 'Server error' });
        }
    });
});
exports.default = router;
