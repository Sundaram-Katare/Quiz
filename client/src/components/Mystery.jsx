"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Mystery() {
  const [reward, setReward] = useState(false);
  const dropBoxRef = useRef(null);

  const handleDrop = (event, info) => {
    if (dropBoxRef.current) {
      const box = dropBoxRef.current.getBoundingClientRect();
      const giftX = info.point.x;
      const giftY = info.point.y;

      // check if gift is inside the box
      if (
        giftX >= box.left &&
        giftX <= box.right &&
        giftY >= box.top &&
        giftY <= box.bottom
      ) {
        setReward(true);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-900 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        🎁 Drag the Gift into the Box 🎁
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full max-w-4xl">
        {/* Drop Box */}
        <div className="flex justify-center">
          <div
            ref={dropBoxRef}
            className="h-40 w-60 border-4 border-dashed border-white rounded-2xl flex flex-col justify-center items-center bg-white/10 backdrop-blur-sm"
          >
            {reward ? (
              <motion.p
                className="text-green-400 font-semibold text-lg md:text-xl text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                🎉 You received a reward! 🎉
              </motion.p>
            ) : (
              <p className="text-white font-medium text-center">
                Drop gift here for a surprise
              </p>
            )}
          </div>
        </div>

        {/* Draggable Gift */}
        <div className="flex justify-center">
          <motion.img
            src="https://png.pngtree.com/png-clipart/20250418/original/pngtree-gift-box-red-gift-box-yellow-ribbon-png-image_20826676.png"
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            onDragEnd={handleDrop}
            whileDrag={{ scale: 1.2, rotate: 15 }}
            className="h-48 md:h-60 cursor-pointer drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
