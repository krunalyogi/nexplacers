"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
// backend/lib/mongodb.ts
const mongoose_1 = __importDefault(require("mongoose"));
let isConnected = false;
const connectToDatabase = async () => {
    if (isConnected)
        return;
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI, {
            dbName: 'nexplacers', // Optional: specify your DB name
        });
        isConnected = true;
        console.log('✅ MongoDB connected');
    }
    catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw new Error('Failed to connect to MongoDB');
    }
};
exports.connectToDatabase = connectToDatabase;
