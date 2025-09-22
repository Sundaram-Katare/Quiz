import { useState } from "react"
import { SquarePlus } from 'lucide-react';
import Navbar from "../components/Navbar";
import QuizTitle from "../components/QuizTitle";

export default function AddQuiz() {
    const [isEditing, setIsEditing] = useState(false);
    const [addQuestion, setAddQuestion] = useState(false);

    return (
        <>
            <div className="relative bg-gradient-to-r from-[#0E0042] to-[#680080] min-h-screen">
                <Navbar />
                <div className="flex flex-col items-center justify-center m-16">
                    <h1 className="text-4xl font-bold text-white m-4">Create Your Quiz</h1>
                    <button className="flex justify-center items-center gap-1 bg-yellow-400 text-black font-semibold text-2xl rounded-md px-2 py-1"
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        <SquarePlus />
                        Create
                    </button>
                </div>

                {isEditing ? (
                    <QuizTitle />
                ) : null}
            </div>
        </>
    )
}