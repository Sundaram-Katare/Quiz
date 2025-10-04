import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Plus, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import Code from "./Code";

// import {nanoid} from 'nanoid';

export default function AddQuiz() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [questions, setQuestions] = useState([
        { questionText: "", options: ["", "", "", ""], correctAnswerIndex: 0 },
    ]);
    const [imageUrl, setImageUrl] = useState("https://png.pngtree.com/png-clipart/20230507/original/pngtree-quiz-time-bubble-speech-banner-vector-design-png-image_9147207.png");
    const [live, setLive] = useState("Yes");

    const [code, setCode] = useState(null);

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    // Add new empty question
    const addQuestion = () => {
        setQuestions([
            ...questions,
            { questionText: "", options: ["", "", "", ""], correctAnswerIndex: 0 },
        ]);
    };

    // Remove a question
    const removeQuestion = (index) => {
        const updated = [...questions];
        updated.splice(index, 1);
        setQuestions(updated);
    };

    // Update question text
    const updateQuestionText = (index, value) => {
        const updated = [...questions];
        updated[index].questionText = value;
        setQuestions(updated);
    };

    // Update option
    const updateOption = (qIndex, oIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[oIndex] = value;
        setQuestions(updated);
    };

    // Update correct answer
    const updateCorrectAnswer = (qIndex, value) => {
        const updated = [...questions];
        updated[qIndex].correctAnswerIndex = parseInt(value);
        setQuestions(updated);
    };

    // Submit Quiz
    const handleSubmit = async () => {
        if (!title || !description) {
            alert("Title and description are required!");
            return;
        }

        setLoading(true);
        try {
            const payload = { title, description, questions, imageUrl, live:"Yes" };
           const response = await axios.post("http://localhost:3000/api/quiz/add", payload);
           console.log(response.data.code);
           setCode(response.data.code);
            alert("Quiz created successfully!");
            // reset
            setTitle("");
            setDescription("");
            setQuestions([{ questionText: "", options: ["", "", "", ""], correctAnswerIndex: 0 }]);
        } catch (error) {
            console.error(error);
            alert("Failed to create quiz.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-poppins">
            <Navbar />
            { code ? (
                <Code code={code} />
            ) : <div className="max-w-5xl mx-auto px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 bg-opacity-90 p-8 rounded-2xl shadow-lg"
                >
                    {/* Quiz Title */}
                    <h1 className="font-poppins text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                        Create a Room Quiz
                    </h1>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter quiz title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />                        
                    </div>

                    {/* <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300">
                            Image URL
                        </label>
                        <input type="text"
                               placeholder="Enter Image URL"
                               value={imageUrl}
                               onChange={(e) => setImageUrl(e.target.value)}
                            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />                       
                    </div> */}

                    {/* <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300">
                            Is Quiz Live
                        </label>
                        <input type="text"
                               placeholder="Yes/No"
                               value={live}
                               onChange={(e) => setLive(true)}
                            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />                       
                    </div> */}

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300">
                            Description
                        </label>
                        <input
                            type="text"
                            placeholder="Enter quiz description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Questions */}
                    <div className="space-y-8">
                        {questions.map((q, qIndex) => (
                            <motion.div
                                key={qIndex}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: qIndex * 0.1 }}
                                className="p-6 rounded-xl bg-gray-800 shadow-md border border-gray-700"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-semibold">Question {qIndex + 1}</h2>
                                    {questions.length > 1 && (
                                        <button
                                            onClick={() => removeQuestion(qIndex)}
                                            className="text-red-400 hover:text-red-600"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    )}
                                </div>

                                <input
                                    type="text"
                                    placeholder="Enter question text"
                                    value={q.questionText}
                                    onChange={(e) => updateQuestionText(qIndex, e.target.value)}
                                    className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />

                                {/* Options */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {q.options.map((opt, oIndex) => (
                                        <input
                                            key={oIndex}
                                            type="text"
                                            placeholder={`Option ${oIndex + 1}`}
                                            value={opt}
                                            onChange={(e) =>
                                                updateOption(qIndex, oIndex, e.target.value)
                                            }
                                            className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    ))}
                                </div>

                                {/* Correct Answer */}
                                <div className="mt-4">
                                    <label className="text-sm font-medium text-gray-300 mr-2">
                                        Correct Answer:
                                    </label>
                                    <select
                                        value={q.correctAnswerIndex}
                                        onChange={(e) =>
                                            updateCorrectAnswer(qIndex, e.target.value)
                                        }
                                        className="px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    >
                                        {q.options.map((_, i) => (
                                            <option key={i} value={i}>
                                                Option {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Add Question Button */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={addQuestion}
                            className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
                        >
                            <Plus size={18} /> Add Question
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
                        >
                            {loading ? "Saving..." : "Save Quiz"}
                        </button>
                    </div>
                </motion.div>
            </div>
            }
        </div>
    );
}
