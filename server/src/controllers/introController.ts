import { Request, Response } from 'express';
import Intro from '../models/Intro';

const createIntro = async (req: Request, res: Response) => {
  const { content } = req.body;
  const userId = (req as any).user?.id; // Type assertion
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const newIntro = new Intro({ userId , content });
    await newIntro.save();
    res.status(201).json(newIntro);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getIntro = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id; // Type assertion
  try {
    const intro = await Intro.findOne({ userId});
    if (!intro) {
      return res.status(404).json({ message: 'Intro not found' });
    }
    res.status(200).json(intro);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export { createIntro, getIntro };
