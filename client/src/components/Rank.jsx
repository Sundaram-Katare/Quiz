import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const VITE_BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:3000/api/";

export default function Rank() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${VITE_BACKEND_API_URL}auth`);
        // Calculate accuracy
        const usersWithAccuracy = res.data.users.map((user) => {
          let accuracy =
            user.quizParticipated > 0
              ? (user.points / (user.quizParticipated * 20)) * 100
              : 0;
          accuracy = accuracy <= 100 ? accuracy : accuracy / 10;
          return { ...user, accuracy };
        });
        const sortedUsers = usersWithAccuracy.sort(
          (a, b) => b.accuracy - a.accuracy
        );
        setUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <motion.div
      className="w-full flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Row */}
      <motion.div
        className="hidden md:grid grid-cols-5 w-full max-w-5xl bg-gray-900 p-4 rounded-lg border border-gray-700 font-semibold text-lg mb-2"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">Rank</div>
        <div className="text-center">Username</div>
        <div className="text-center">Points</div>
        <div className="text-center">Level</div>
        <div className="text-center">Accuracy</div>
      </motion.div>

      {/* User Rows */}
      {users.length > 0 ? (
        <motion.div
          className="w-full"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {users.map((user, index) => (
            <motion.div
              key={user._id}
              className={`grid grid-cols-1 md:grid-cols-5 w-full max-w-5xl p-4 my-2 rounded-lg border transition-all duration-300 ${index === 0
                  ? "bg-gradient-to-r from-yellow-600 to-yellow-400 border-yellow-500"
                  : index === 1
                  ? "bg-gradient-to-r from-gray-500 to-gray-400 border-gray-400"
                  : index === 2
                  ? "bg-gradient-to-r from-orange-700 to-orange-500 border-orange-500"
                  : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Rank */}
              <div className="flex justify-center items-center text-lg font-bold">
                #{index + 1}
              </div>

              {/* Avatar + Username */}
              <div className="flex justify-center md:justify-start items-center gap-3">
                <img
                  src={
                    user.avatar ||
                    "https://img.pikbest.com/png-images/20241009/cute-dog-face-vector-artwork_10942062.png!sw800"
                  }
                  alt="avatar"
                  className="rounded-full h-10 w-10 border-2 border-purple-500"
                />
                <h2 className="text-lg font-medium">{user.username}</h2>
              </div>

              {/* Points */}
              <div className="flex justify-center items-center text-base">
                <span className="text-yellow-300">🪙 {user.points}</span>
              </div>

              {/* Level */}
              <div className="flex justify-center items-center text-sm md:text-base font-semibold">
                {user.accuracy >= 91
                  ? "Legend"
                  : user.accuracy >= 81
                  ? "Champion"
                  : user.accuracy >= 67
                  ? "Master"
                  : user.accuracy >= 40
                  ? "Learner"
                  : "Beginner"}
              </div>

              {/* Accuracy */}
              <div className="flex justify-center items-center text-sm md:text-base">
                {user.quizParticipated > 0
                  ? `${user.accuracy.toFixed(2)}%`
                  : "N/A"}
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          className="text-center text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading users...
        </motion.p>
      )}
    </motion.div>
  );
}
