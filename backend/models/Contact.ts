// backend/models/Contact.ts
import mongoose, { Document, Schema } from 'mongoose'

export interface IContact extends Document {
  firstName: string
  lastName: string
  email: string
  phone: string
  role: string
  message: string
  createdAt?: Date
}

const contactSchema = new Schema<IContact>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
)

const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', contactSchema)
export default Contact
