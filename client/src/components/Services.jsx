import { MessageCircleQuestionMark, Crown, ChartColumn } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <ChartColumn size={84} color='#F03D29' />,
    title: "Private Quiz Room",
  },
  {
    icon: <MessageCircleQuestionMark size={84} color='#72F029' />,
    title: "Trivia",
  },
  {
    icon: <Crown size={84} color='#F0B829' />,
    title: "Join With Code",
  }
];

export default function Services() {
  return (
    <div className="bg-gradient-to-r from-[#392a5c] to-[#030008] flex items-center justify-center px-4 py-12">
      <div className="bg-white p-6 sm:p-8 rounded-2xl max-w-6xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center border-4 border-[#5830af] rounded-2xl p-6 text-center transition-all duration-300 hover:border-[#a58cda] hover:bg-[#a58cda]/20 hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">{service.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
