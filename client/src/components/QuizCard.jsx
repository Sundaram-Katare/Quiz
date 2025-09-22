import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "../pages/Quiz";

export default function QuizCard({ quiz }) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/quiz", {
  //     state: { quiz },
  //   });
  // };

  return (
    <div className="p-6 bg-white rounded-3xl border-4 border-blue-200 flex flex-col items-center max-w-xs mx-auto shadow-2xl transition-all duration-300 hover:scale-105 sm:max-w-sm md:max-w-md">
      {/* Decorative icon */}
      <div className="w-28 h-28 sm:w-36 sm:h-36 mb-4 flex items-center justify-center">
        <img src={quiz.image} className="border rounded-full" alt={quiz.title || "Quiz"} />
      </div>

      <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">
        {quiz.title}
      </h2>

      <p className="text-gray-500 text-center mb-6 px-4">
        Create, customize, and challenge your friends!
      </p>

      {/* "Get Started" button */}
      <div className="w-full px-4">
        <button
          onClick={() => setOpen(true)}
          className="w-full py-3 px-5 rounded-xl text-white font-semibold shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}