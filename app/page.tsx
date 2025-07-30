import { connectDB } from "@/lib/mongodb";
import Quiz from "@/lib/models/Quiz";
import QuizCatalog from "@/components/QuizCatalog";

// This function must be async to fetch data from MongoDB
export default async function Home() {
  await connectDB();

  const quizzes = await Quiz.find().lean();

  return (
    <main className="p-6">
      <QuizCatalog quizzes={JSON.parse(JSON.stringify(quizzes))} />
    </main>
  );
}