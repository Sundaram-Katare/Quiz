import { motion } from 'framer-motion';

export default function Steps() {
  return (
    <motion.div className="flex flex-row gap-4 items-end">
      <motion.div className="h-[210px] w-[80px] rounded-xl bg-black" />
      <motion.div className="h-[320px] w-[80px] rounded-xl bg-green-500" />
      <motion.div className="h-[180px] w-[80px] rounded-xl bg-red-600" />
    </motion.div>
  );
}
