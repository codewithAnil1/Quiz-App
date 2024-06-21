import React, { useState } from "react";

const QuizForm = ({ saveQuiz }) => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correct: 0 },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correct: 0 },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && questions.length > 0) {
      saveQuiz({ title, questions });
      setTitle("");
      setQuestions([{ question: "", options: ["", "", "", ""], correct: 0 }]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Quiz Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Question {qIndex + 1}
          </label>
          <input
            type="text"
            value={q.question}
            onChange={(e) =>
              handleQuestionChange(qIndex, "question", e.target.value)
            }
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <div className="grid grid-cols-2 gap-2">
            {q.options.map((opt, oIndex) => (
              <div key={oIndex}>
                <input
                  type="text"
                  value={opt}
                  onChange={(e) =>
                    handleOptionChange(qIndex, oIndex, e.target.value)
                  }
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correct Option
            </label>
            <select
              value={q.correct}
              onChange={(e) =>
                handleQuestionChange(
                  qIndex,
                  "correct",
                  parseInt(e.target.value)
                )
              }
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              {q.options.map((_, oIndex) => (
                <option key={oIndex} value={oIndex}>{`Option ${
                  oIndex + 1
                }`}</option>
              ))}
            </select>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addQuestion}
        className="mt-2 bg-blue-500 text-white p-2 rounded-md"
      >
        Add Question
      </button>
      <button
        type="submit"
        className="mt-2 bg-green-500 text-white p-2 rounded-md"
      >
        Save Quiz
      </button>
    </form>
  );
};

export default QuizForm;
