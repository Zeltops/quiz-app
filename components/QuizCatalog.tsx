import QuizCard from "./QuizCard";

export default function QuizCatalog({ quizzes }: { quizzes: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-4 py-6">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz._id} {...quiz} />
      ))}
    </div>
  );
}