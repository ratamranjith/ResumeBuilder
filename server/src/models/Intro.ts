import { Schema, model } from 'mongoose';

const introSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
});

const Intro = model('Intro', introSchema);
export default Intro;
