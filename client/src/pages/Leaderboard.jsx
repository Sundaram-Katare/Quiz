import Navbar from "../components/Navbar";
import Rank from "../components/Rank";
import { motion } from "framer-motion";

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          className="font-bold text-4xl mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          🏆 Lumin Leaderboard
        </motion.h1>

        {/* Leaderboard Container */}
        <motion.div
          className="p-4 rounded-xl bg-gray-950 bg-opacity-80 shadow-lg border border-gray-800"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Rank />
        </motion.div>
      </div>
    </div>
  );
}
