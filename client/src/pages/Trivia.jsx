import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuizCard from "../components/QuizCard";
import LeaderboardAd from "../components/LeaderboardAd";
import Footer from "../components/Footer";
import { fetchQuizzes } from "../feature/quiz/quiz.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Journey from "../components/Journey.jsx";

export default function Trivia() {
  const quizzes = useSelector((state) => state.quiz.quizzes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const handleStartQuiz = (quiz) => {
    navigate("/quiz", { state: { quiz } });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#392a5c] to-[#030008] min-h-screen p-4 sm:p-8 font-poppins">
        <Navbar />
        <h1 className="text-3xl sm:text-5xl md:text-6xl italic font-bold text-white font-sans text-center my-10 sm:m-16">
          Step Into the Quiz Arena
        </h1>
        <Journey />
        <div className="flex flex-col justify-center p-2 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) =>
              quiz.live === "No" ? (
                <QuizCard
                  quiz={quiz}
                  key={quiz._id}
                  onStartQuiz={() => handleStartQuiz(quiz)}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
      <LeaderboardAd />
      <Footer />
    </>
  );
}
