import { MessageCircleQuestionMark, Crown, ChartColumn } from 'lucide-react';

const services = [
    {
        icon: <ChartColumn size={84} color='#F03D29' />,
        title: "Generate Live Quiz",
    },
    {
        icon: <MessageCircleQuestionMark size={84} color='#72F029' />,
        title: "Trivia",
    },
    {
        icon: <Crown size={84} color='#F0B829'/>,
        title: "Participate in Live Quiz"
    }
]

export default function Services() {
    return (
        <>
        <div className='bg-gradient-to-r from-[#5830af] to-[#a58cda] flex items-center justify-center'>
         <div className="flex bg-white p-8 rounded-2xl items-center justify-center max-w-fit">
            <div className="grid grid-cols-3 gap-8">
             {services.map((service) => (
                <div className="flex flex-col border-4 border-[#5830af] rounded-2xl p-6 hover:border-[#a58cda] hover:bg-[#a58cda]">
                    <p className='flex justify-center items-center'>{service.icon}</p>
                    <h2 className='text-2xl font-semibold text-center'>{service.title}</h2>
                    <button className='font-light'>Start Now</button>
                </div>
             ))}
            </div>
         </div>
         </div>
        </>
    )
}