import { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
import Resume from '../models/Resume';

// Interface for Resume document
interface IResume extends Document {
  userId: Schema.Types.ObjectId;
  intro?: string;
  summary?: string;
  workExperience?: string[];
  technicalExpertise?: string[];
  skills?: string[];
  tools?: string[];
  methodology?: string[];
  keyProjects?: string[];
  certifications?: string[];
  website?: string;
  education?: string[];
}

// Mongoose schema for Resume
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

// Create Resume function
const createResume = async (req: Request, res: Response) => {
  const { intro, summary, workExperience, technicalExpertise, skills, tools, methodology, keyProjects, certifications, website, education } = req.body;
  const userId = (req as any).user?.id; // Type assertion to access user ID

  try {
    // Create new Resume document
    const newResume = new Resume({
      userId,
      intro,
      summary,
      workExperience,
      technicalExpertise,
      skills,
      tools,
      methodology,
      keyProjects,
      certifications,
      website,
      education,
    });

    // Save the new Resume document
    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      // Mongoose validation error
      console.error('Validation error:', error.message);
      res.status(400).json({ message: 'Validation error', error: error.message });
    } else if (error instanceof mongoose.Error.DocumentNotFoundError) {
      // Document not found error
      console.error('Document not found error:', error.message);
      res.status(404).json({ message: 'Document not found', error: error.message });
    } else {
      // Generic server error
      //console.error('Server error:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Get Resume function
const getResume = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id; // Type assertion to access user ID

  try {
    // Find resume document by userId
    const resume = await Resume.findOne({ userId });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.status(200).json(resume);
  } catch (error) {
    if (error instanceof mongoose.Error.DocumentNotFoundError) {
      // Document not found error
      console.error('Document not found error:', error.message);
      res.status(404).json({ message: 'Resume not found' });
    } else {
      // Generic server error
//      console.error('Server error:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

export default mongoose.model<IResume>('Resume', ResumeSchema);

export { createResume, getResume };
