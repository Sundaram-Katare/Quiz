import React from "react";
import { motion } from "framer-motion";

const steps = ["Beginner", "Learner", "Master", "Champion", "Legend"];

export default function Journey() {
  return (
    <div className="w-full flex justify-center items-center py-6 md:py-10 bg-transparent rounded-2xl shadow-lg">
      <div className="relative flex flex-col md:flex-row md:items-center w-full max-w-4xl px-10">
        
        <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 z-0" />
        
        <div className="md:hidden absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 z-0" />
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-1 items-center relative z-10">
            <motion.div
              className="w-12 h-12 rounded-full bg-yellow-500 shadow-xl text-white flex items-center justify-center text-lg font-bold border-4 border-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              {index + 1}
            </motion.div>
            <span className="mt-2 text-base font-semibold text-white">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
