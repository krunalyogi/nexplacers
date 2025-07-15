"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ApplicationSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
    linkedin: String,
    message: String,
    role: String,
    resumePath: String,
}, { timestamps: true });
exports.default = mongoose_1.default.models.Application || mongoose_1.default.model('Application', ApplicationSchema);
