import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuizzes } from "../feature/quiz/quiz.js";
import Navbar from "../components/Navbar.jsx";

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:3000/api/";

export default function LiveQuiz() {
    const quizzes = useSelector((state) => state.quiz.quizzes);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuizzes());
        console.log(quizzes);
    }, [dispatch]);


    const handleJoin = async () => {
        if (!code) return alert("Enter code");
        setLoading(true);
        try {
            const resp = await axios.get(`${BACKEND_API_URL}quiz/code/?code=${code}`);
            console.log(code);
            console.log(resp.data._id);
            if (!resp.data) return alert("Quiz not found");
            navigate('/quiz', { state: { _id: resp.data._id, from: "Trivia" } });
        } catch (err) {
            alert("Invalid code or server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="bg-gradient-to-r from-[#392a5c] to-[#030008] p-8 font-poppins">
                <Navbar />
                <div className="p-8 flex flex-col justify-center items-center">
                    <h2 className="text-8xl font-extrabold text-white mb-4">Join Quiz</h2>
                    <img src="images/quizGif.gif" className="mb-16" alt="" />
                    <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter 6-digit code" className="border p-2 text-red-400 font-semibold text-center rounded-xl text-5xl mb-16" />

                    <button onClick={handleJoin} disabled={loading} className="ml-2 px-4 py-2 bg-yellow-500 rounded-xl text-3xl text-black">{loading ? "Joining..." : "Join"}</button>
                </div>
            </div>
        </>
    );
}
