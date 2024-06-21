import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizById, getQuizFromLocalStorageById } from "../data/quizzes";

const TakeQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let foundQuiz = getQuizById(Number(id));
    if (!foundQuiz) {
      foundQuiz = getQuizFromLocalStorageById(Number(id));
    }
    setQuiz(foundQuiz);
    if (foundQuiz) {
      setSelectedAnswers(new Array(foundQuiz.questions.length).fill(null));
    }
  }, [id]);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowResults(true);
  };

  if (!quiz) return <p>Loading quiz...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
      {showResults ? (
        <div className="w-full max-w-lg bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Quiz Results</h2>
          <p className="text-lg mb-4">
            Your Score: {score} / {quiz.questions.length}
          </p>
          <button
            onClick={() => navigate("/quizzes")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200"
          >
            Back to Quiz List
          </button>
        </div>
      ) : (
        <form className="w-full max-w-lg bg-white p-4 rounded shadow-md">
          {quiz.questions.map((question, index) => (
            <div key={index} className="mb-4">
              <h2 className="font-semibold">{question.question}</h2>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={optionIndex}
                      checked={selectedAnswers[index] === optionIndex}
                      onChange={() => handleAnswerChange(index, optionIndex)}
                      className="form-radio"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default TakeQuiz;
