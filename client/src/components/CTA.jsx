import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTA() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center p-6 sm:p-8 text-center sm:text-left">
            <div className="flex flex-col justify-center">
                {/* Headings */}
                <div className="flex flex-col mb-6 sm:mb-8">
                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        Challenge Your Mind,
                    </motion.h1>
                    <br />
                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        Beat The Leaderboard!
                    </motion.h1>
                </div>

                {/* Description */}
                <div className="mb-6 sm:mb-8 text-white text-sm sm:text-base font-medium max-w-lg mx-auto sm:mx-0">
                    <p>
                        Challenge yourself with trivia, create your own quiz, or join with a code. 
                        Compete with friends, climb the leaderboard, and win daily rewards.
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center sm:justify-start">
                    <motion.button 
                        className="flex justify-center items-center gap-2 bg-yellow-400 text-black font-semibold text-lg sm:text-xl rounded-md px-4 py-2 hover:bg-yellow-300"
                        onClick={() => navigate("/trivia")}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <FaPlay />
                        Play Today
                    </motion.button>
                </div>
            </div>
        </div>
    )
}
