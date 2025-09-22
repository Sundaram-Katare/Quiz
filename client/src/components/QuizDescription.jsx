import Quiz from "../pages/Quiz"

export default function QuizDescription({ quiz }) {
    return (
        <>
         <div className="flex justify-center items-center bg-gradient-to-r from-[#0E0042] to-[#680080] min-h-screen">
              <div className="flex justify-center p-8 rounded-2xl bg-white">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-center">{quiz.title}</h1>

                   <h2 className="text-3xl font-semibold">Description: 
                    <span className="font-light">
                        {quiz.description}
                    </span>
                   </h2>

                   <h2 className="text-3xl font-semibold">Total Questions: 
                    <span className="font-light">{quiz.questions.length}</span>
                   </h2>

                   <button>
                    Start
                   </button>


                </div>
              </div>
         </div>
        </>
    )
}