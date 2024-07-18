import mongoose, { Schema, Document } from 'mongoose';

interface IResume extends Document {
  userId: Schema.Types.ObjectId;
  intro: string;
  summary: string;
  workExperience: string[];
  technicalExpertise: string[];
  skills: string[];
  tools: string[];
  methodology: string[];
  keyProjects: string[];
  certifications: string[];
  website: string;
  education: string[];
}

const ResumeSchema: Schema<IResume> = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  intro: String,
  summary: String,
  workExperience: [String],
  technicalExpertise: [String],
  skills: [String],
  tools: [String],
  methodology: [String],
  keyProjects: [String],
  certifications: [String],
  website: String,
  education: [String],
});

export default mongoose.model<IResume>('Resume', ResumeSchema);
