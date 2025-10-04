import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementPoints } from "../feature/auth/authSlice.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Navbar from "../components/Navbar";

export default function QuizStart() {
  const location = useLocation();
  const { _id, from } = location.state || {};

  const quizzes = useSelector((state) => state.quiz.quizzes);
  const quiz = quizzes.find((q) => q._id === _id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setAnswers(Array(quiz?.questions.length).fill(null));
  }, [quiz]);

  if (!quiz) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <h1 className="text-xl font-semibold text-red-600">Quiz not found.</h1>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentIndex];

  async function submitAnswer(selectedIndex, question) {
    const isCorrect = question && question.correctAnswerIndex === selectedIndex;

    if (isCorrect && quiz.live === "No") {
      try {
        await dispatch(incrementPoints()).unwrap();
        // Optionally show success message e.g. toast.success("Correct! +10 points");
      } catch (err) {
        // Optionally show error message e.g. toast.error("Could not update points");
      }
    } else {
      // Optionally show error message e.g. toast.error("Incorrect");
    }
  }

  function handleOptionClick(optionIndex) {
    setSelectedOption(optionIndex);
  }

  async function handleNext() {
    // Save answer
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedOption;
    setAnswers(newAnswers);

    // Submit current answer
    await submitAnswer(selectedOption, currentQuestion);

    // Update score locally
    if (selectedOption === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }

    setSelectedOption(null);
    if (currentIndex + 1 < quiz.questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setAnswers(Array(quiz.questions.length).fill(null));
  }

  const chartData = quiz.questions.map((q, idx) => ({
    name: `Q${idx + 1}`,
    Correct: answers[idx] === q.correctAnswerIndex ? 1 : 0,
    Incorrect: answers[idx] !== null && answers[idx] !== q.correctAnswerIndex ? 1 : 0,
    Unanswered: answers[idx] === null ? 1 : 0,
  }));

  // Pie chart data
  const totalQuestions = quiz.questions.length;
  const correctCount = answers.filter((ans, idx) => ans === quiz.questions[idx].correctAnswerIndex).length;
  const incorrectCount = answers.filter((ans, idx) => ans !== null && ans !== quiz.questions[idx].correctAnswerIndex).length;
  const unansweredCount = totalQuestions - correctCount - incorrectCount;

  const resultPieData = [
    { name: "Correct", value: correctCount, color: "#f8d215ff" },
    { name: "Incorrect", value: incorrectCount, color: "#ff0c0cff" },
    { name: "Unanswered", value: unansweredCount, color: "#94a3b8" }
  ];

  return (
    <div className="min-h-screen p-4 bg-gradient-to-r from-[#392a5c] to-[#030008]">
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Quiz Questions */}
        <div>
          <h1 className="text-3xl font-bold text-center mb-6">{quiz.title}</h1>

          {!isFinished ? (
            <>
              <div className="mb-6">
                <p className="text-lg font-semibold">
                  Question {currentIndex + 1} of {quiz.questions.length}
                </p>
                <h2 className="text-xl mt-2 font-medium">{currentQuestion.questionText}</h2>
              </div>
              <div className="flex flex-col space-y-4">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    className={`px-4 py-3 rounded-lg border text-left text-gray-700 hover:bg-indigo-500 hover:text-white transition ${selectedOption === idx
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "border-gray-300"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`mt-8 w-full py-3 rounded-lg text-white font-semibold ${selectedOption === null
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-700 hover:bg-indigo-800 transition"
                  }`}
              >
                {currentIndex + 1 === quiz.questions.length ? "Finish Quiz" : "Next Question"}
              </button>
            </>
          ) : (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Quiz Completed!</h2>
              <p className="text-lg">
                You scored {score} out of {quiz.questions.length}
              </p>
              <button
                onClick={handleRestart}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
              >
                Restart Quiz
              </button>
            </div>
          )}
        </div>

        {/* Right: Live Points & Stats */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6">Live Quiz Stats</h2>
          <p className="mb-3 text-lg">Current Score: {score}</p>
          <ResponsiveContainer width="100%" height={250}>
            {isFinished ? (
              <PieChart>
                <Pie
                  data={resultPieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {resultPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            ) : (
              <BarChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="Correct" stackId="a" fill="#22c55e" />
                <Bar dataKey="Incorrect" stackId="a" fill="#ef4444" />
                <Bar dataKey="Unanswered" stackId="a" fill="#94a3b8" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
