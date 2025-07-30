import mongoose, { Schema, Document, model } from 'mongoose';

export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface IQuiz extends Document {
  title: string;
  description?: string;
  imageUrl?: string;
  category: string;
  questions: Question[];
}

const QuestionSchema = new Schema<Question>({
  questionText: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswerIndex: { type: Number, required: true },
});

const QuizSchema = new Schema<IQuiz>({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  category: { type: String, required: true },
  questions: { type: [QuestionSchema], required: true },
}, { timestamps: true });

export default mongoose.models.Quiz || model<IQuiz>('Quiz', QuizSchema);