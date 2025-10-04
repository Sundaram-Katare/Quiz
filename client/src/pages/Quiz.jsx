// Quiz component
import QuizPage from "../components/QuizPage";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Quiz() {
  const location = useLocation();
  const { _id, from } = location.state || {};
  const quizzes = useSelector((state) => state.quiz.quizzes);

  console.log(quizzes);

  // Since _id is unique, use find instead of filter that returns an array
  const quiz = quizzes.find((quiz) => quiz._id === _id);
  console.log(_id, quiz);

  return (
    <>
      <div className="bg-gradient-to-r text-white from-[#0E0042] to-[#680080] min-h-screen">
        <QuizPage id={_id} />
      </div>
    </>
  );
}
