"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/server.ts
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const node_cron_1 = __importDefault(require("node-cron"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/uploads', express_1.default.static('public/uploads'));
const Contact_1 = __importDefault(require("./routes/Contact"));
app.use('/api/contact', Contact_1.default);
const apply_1 = __importDefault(require("./routes/apply"));
app.use('/api', apply_1.default); // POST /api/apply
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(5000, () => console.log('🚀 Server running at http://localhost:5000'));
})
    .catch((err) => console.error(err));
const sendEmailWithExcel_1 = __importDefault(require("./utils/sendEmailWithExcel"));
node_cron_1.default.schedule('0 8 * * *', () => {
    console.log('⏰ Running scheduled contact report email (8 AM)');
    (0, sendEmailWithExcel_1.default)();
});
