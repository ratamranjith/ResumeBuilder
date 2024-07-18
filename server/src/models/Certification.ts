import { Schema, model } from 'mongoose';

const certificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: Date, required: true },
});

const Certification = model('Certification', certificationSchema);
export default Certification;
