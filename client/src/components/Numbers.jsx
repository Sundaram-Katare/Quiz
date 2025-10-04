import { FaArrowDown } from 'react-icons/fa'

const data = [
  { id: 1, icon: FaArrowDown, number: "100+", text: "Quizzes" },
  { id: 2, icon: null, number: "300+", text: "Players" },
  { id: 3, icon: null, number: "80%", text: "Engagement" },
]

export default function Numbers() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-[#392a5c] to-[#030008] font-poppins flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-6 w-56 h-32 transition hover:scale-105 hover:shadow-lg"
          >
            {item.icon ? (
              <item.icon className="text-blue-500 text-2xl mb-2" />
            ) : (
              <span className="text-xl mb-2">🔥</span>
            )}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-800">{item.number}</h2>
              <p className="text-gray-500 font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
