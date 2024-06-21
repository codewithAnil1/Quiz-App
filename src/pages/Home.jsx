import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 text-center">
        <h1 className="text-5xl font-bold mb-8 text-white animate-bounce">
          Welcome to the Online Quiz Platform
        </h1>
        <p className="text-2xl mb-8 text-white">
          Test your skills with our interactive quizzes!
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to="/quizzes"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Take a Quiz
          </Link>

          <Link
            to="/admin/login"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-200 transform hover:scale-105"
          >
            Enter as Admin
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
