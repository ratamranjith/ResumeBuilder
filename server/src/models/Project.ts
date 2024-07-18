import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
});

const Project = model('Project', projectSchema);
export default Project;
