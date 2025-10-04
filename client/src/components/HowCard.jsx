import { motion } from "framer-motion";

export default function HowCard({ step }) {
  return (
    <motion.div
      className="p-4 sm:p-6 font-poppins bg-white rounded-3xl border-4 border-blue-200 flex flex-col items-center max-w-[90%] sm:max-w-sm md:max-w-md mx-auto shadow-2xl transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image */}
      <div className="mb-4 flex items-center justify-center w-full h-40 sm:h-48 md:h-56">
        <img
          src={step.image}
          className="border rounded-xl h-full w-full object-contain"
          alt={step.title || "Quiz"}
        />
      </div>

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-1 text-gray-800">
        {step.title}
      </h2>
    </motion.div>
  );
}
