import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  linkedin: String,
  message: String,
  role: String,
  resumePath: String,
}, { timestamps: true });

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
