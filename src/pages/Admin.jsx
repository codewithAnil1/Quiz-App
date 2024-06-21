import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(0);
  const [quizList, setQuizList] = useState([]);

  const navigate = useNavigate();

  const handleAddQuestion = () => {
    const newQuestion = {
      question,
      options,
      correctOption,
    };

    setQuizList([...quizList, newQuestion]);

    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectOption(0);
  };

  const handleSaveQuiz = () => {
    const newQuiz = {
      id: Date.now(),
      title,
      questions: quizList,
    };

    const savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

    localStorage.setItem("quizzes", JSON.stringify([...savedQuizzes, newQuiz]));

    setTitle("");
    setQuizList([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Section</h2>
      <form className="w-full max-w-md bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Quiz Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {options.map((option, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-sm font-bold mb-2">
              Option {index + 1}
            </label>
            <input
              type="text"
              value={option}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[index] = e.target.value;
                setOptions(newOptions);
              }}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        ))}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Correct Option</label>
          <select
            value={correctOption}
            onChange={(e) => setCorrectOption(parseInt(e.target.value))}
            className="w-full px-3 py-2 border rounded"
          >
            {options.map((_, index) => (
              <option key={index} value={index}>
                Option {index + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={handleAddQuestion}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Add Question
        </button>
        <button
          type="button"
          onClick={handleSaveQuiz}
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 mt-4"
        >
          Save Quiz
        </button>
      </form>
      <div className="mt-8 w-full max-w-md bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-bold mb-4">Quiz Questions</h3>
        {quizList.length === 0 ? (
          <p>No questions added yet.</p>
        ) : (
          quizList.map((q, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold">{q.question}</h4>
              <ul>
                {q.options.map((option, idx) => (
                  <li
                    key={idx}
                    className={
                      q.correctOption === idx ? "font-bold text-green-600" : ""
                    }
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200 mt-4"
      >
        Home
      </button>
    </div>
  );
};

export default Admin;
