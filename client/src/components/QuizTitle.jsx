import { motion } from 'framer-motion';
import AddQuestion from './AddQuestion';
import { useState } from "react";

export default function QuizTitle() {
    const [addQuestion, setAddQuestion] = useState(false);

    return (
        <>
        {!addQuestion ? (
            <motion.div className="p-8 flex flex-col items-center "
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
            >
                <div className="w-full max-w-md flex flex-col gap-4 bg-white rounded-2xl max-w-fit p-8">
                    <div className="flex flex-col">
                        <label htmlFor="quiz-title" className="text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            id="quiz-title"
                            type="text"
                            placeholder="Enter Quiz Title"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="quiz-description" className="text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <input
                            id="quiz-description"
                            type="text"
                            placeholder="Enter Description"
                            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        onClick={() => setAddQuestion(true)}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Next
                    </button>
                </div>
            </motion.div>): (
                <AddQuestion />
            )}
        </>
    )
}