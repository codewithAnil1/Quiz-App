import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import TakeQuiz from "./pages/TakeQuiz";
import QuizList from "./pages/QuizList";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/take-quiz/:id" element={<TakeQuiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
