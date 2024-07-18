import { Schema, model } from 'mongoose';

const experienceSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  responsibilities: { type: [String], required: true },
});

const Experience = model('Experience', experienceSchema);
export default Experience;
