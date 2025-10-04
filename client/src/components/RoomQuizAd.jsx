import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RoomQuizAd() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#392a5c] to-[#030008] min-h-screen p-8 pt-20 font-poppins flex flex-col justify-center items-center text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white italic"
      >
        Join with a Code
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-xl mt-6 text-white italic"
      >
        Enter a room code to challenge your friends in real-time!
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={() => navigate("/live")}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        Join With Code
      </motion.button>

      {/* Decorative Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12"
      >
        <img
          src="https://png.pngtree.com/png-vector/20250605/ourmid/pngtree-joyful-diverse-friends-jumping-in-celebration-png-image_16469392.png"
          alt="room quiz"
          className="w-64 sm:w-72 md:w-96 lg:w-full mx-auto"
        />
      </motion.div>
    </div>
  );
}
