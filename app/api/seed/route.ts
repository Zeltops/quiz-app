import { connectDB } from "@/lib/mongodb";
import Quiz from "@/lib/models/Quiz";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const quizzes = [
      {
        title: "Math Basics",
        category: "Math",
        description: "Test your basic math skills!",
        imageUrl: "/images/math.png",
        questions: [
          {
            questionText: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswerIndex: 1,
          },
          {
            questionText: "What is 5 x 3?",
            options: ["10", "15", "20", "25"],
            correctAnswerIndex: 1,
          },
        ],
      },
      {
        title: "Math Intermediate",
        category: "Math",
        description: "Take it up a notch with intermediate math questions!",
        imageUrl: "/images/math.png",
        questions: [
          {
            questionText: "What is 12 ÷ 3?",
            options: ["4", "5", "3", "2"],
            correctAnswerIndex: 0,
          },
          {
            questionText: "What is 7 x 6?",
            options: ["42", "36", "40", "48"],
            correctAnswerIndex: 0,
          },
        ],
      },
      {
        title: "Math Advanced",
        category: "Math",
        description: "Challenge yourself with advanced problems!",
        imageUrl: "/images/math.png",
        questions: [
          {
            questionText: "What is the derivative of x^2?",
            options: ["2x", "x", "x^2", "1"],
            correctAnswerIndex: 0,
          },
          {
            questionText: "What is the integral of 2x?",
            options: ["x^2", "2x^2", "x", "4x"],
            correctAnswerIndex: 0,
          },
        ],
      },
      {
        title: "Algebra Fundamentals",
        category: "Math",
        description: "Learn the foundations of algebra.",
        imageUrl: "/images/math.png",
        questions: [
          {
            questionText: "Solve for x: 2x + 3 = 7",
            options: ["1", "2", "3", "4"],
            correctAnswerIndex: 1,
          },
          {
            questionText: "Factor: x^2 - 9",
            options: ["(x+3)(x-3)", "x(x-9)", "x^2-3", "(x+9)(x-1)"],
            correctAnswerIndex: 0,
          },
        ],
      },
      {
        title: "Geometry Essentials",
        category: "Math",
        description: "Review key geometry concepts and formulas.",
        imageUrl: "/images/math.png",
        questions: [
          {
            questionText: "What is the sum of angles in a triangle?",
            options: ["90°", "180°", "270°", "360°"],
            correctAnswerIndex: 1,
          },
          {
            questionText: "How many sides does a hexagon have?",
            options: ["5", "6", "7", "8"],
            correctAnswerIndex: 1,
          },
        ],
      },
      {
        title: "Calculus Challenge",
        category: "Math",
        description: "Push your limits with tough calculus questions.",
        imageUrl: "/images/math.png",
        questions: [
          {
            questionText: "What is the limit of (1 + 1/n)^n as n → ∞?",
            options: ["e", "1", "0", "∞"],
            correctAnswerIndex: 0,
          },
          {
            questionText: "Derivative of sin(x)?",
            options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
            correctAnswerIndex: 0,
          },
        ],
      },
    ];

    let updated = 0;

    for (const quiz of quizzes) {
      const result = await Quiz.updateOne(
        { title: quiz.title },
        { $set: quiz },
        { upsert: true }
      );

      if (result.upsertedCount > 0 || result.modifiedCount > 0) {
        updated++;
      }
    }

    return NextResponse.json({
      message: `Seed complete. ${updated} quizzes inserted/updated.`,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to seed quizzes" },
      { status: 500 }
    );
  }
}