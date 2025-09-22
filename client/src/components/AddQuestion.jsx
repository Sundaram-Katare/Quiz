import { useState } from "react"
import Options from "./Options";


export default function AddQuestion() {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [next, setNext] = useState(false);
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col gap-4 bg-gradient-to-r from-[#D6B42D] to-[#FFBC21] p-8 rounded-lg text-white max-w-fit ">
                    <div className="flex flex-col text-black">
                        <div className="flex justify-between">
                            <label htmlFor={`question-${questionNumber}`} className="text-lg font-semibold text-black">
                                Question {questionNumber}
                            </label>

                            <button>Save</button>
                        </div>
                        <input
                            id={`question-${questionNumber}`}
                            type="text"
                            placeholder="Enter your question"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <Options />
                        <div className="flex justify-between">
                            <button onClick={() => setQuestionNumber(questionNumber - 1)} disabled={questionNumber === 1}
                                className="mt-4 px-6 py-2 bg-[#680080] text-white rounded hover:bg-blue-700 transition"
                            >
                                Back
                            </button>

                            <button
                                onClick={() => setQuestionNumber(questionNumber + 1)}
                                className="mt-4 px-6 py-2 bg-[#680080] text-white rounded hover:bg-blue-700 transition"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}