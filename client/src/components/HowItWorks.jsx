import { motion } from "framer-motion";
import HowCard from "./HowCard";

const steps = [
  { id: 1, title: "Enter the Code", image: "https://www.pngitem.com/pimgs/m/94-941970_guy-with-laptop-cartoon-using-laptop-png-transparent.png" },
  { id: 2, title: "Play the Quiz", image: "images/how2.png" },
  { id: 3, title: "Earn Points", image: "images/how3.png" },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-r from-[#392a5c] to-[#030008] font-poppins min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Here's How It Works
      </motion.h1>

      {/* Steps Grid */}
      <motion.div
        className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.3 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <HowCard step={step} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
