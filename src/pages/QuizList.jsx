// src/pages/QuizList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllQuizzes } from "../data/quizzes";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const allQuizzes = getAllQuizzes();
    setQuizzes(allQuizzes);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Available Quizzes</h1>
      <ul className="w-full max-w-lg bg-white p-4 rounded shadow-md">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="mb-4">
            <Link
              to={`/take-quiz/${quiz.id}`}
              className="text-blue-500 hover:underline"
            >
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
