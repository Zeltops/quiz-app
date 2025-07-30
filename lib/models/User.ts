import mongoose, { Schema, Document, model } from 'mongoose';

export interface CompletedQuiz {
  quizId: mongoose.Types.ObjectId;
  score: number;
}

export interface IUser extends Document {
  email: string;
  name?: string;
  password: string;
  totalScore: number;
  completedQuizzes: CompletedQuiz[];
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: String,
  password: { type: String, required: true },
  totalScore: { type: Number, default: 0 },
  completedQuizzes: [
    {
      quizId: { type: Schema.Types.ObjectId, ref: 'Quiz' },
      score: Number,
    },
  ],
}, { timestamps: true });

export default mongoose.models.User || model<IUser>('User', UserSchema);