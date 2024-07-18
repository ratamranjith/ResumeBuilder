import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
});

const Contact = model('Contact', contactSchema);
export default Contact;
