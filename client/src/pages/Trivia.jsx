import Navbar from "../components/Navbar";
import QuizCard from "../components/QuizCard";

const quizzes = [
  {
    id:1,
    title: "Science Quiz",
    description: "Test your general science knowledge",
    image: "https://m.media-amazon.com/images/I/51jIumODWzL.png",
    questions: [
      {
        questionText: "How many laws of Newton are there?",
        options: ["One", "Four", "Three", "Two"],
        correctAnswerIndex: 2
      },
      {
        questionText: "What is the chemical symbol of water?",
        options: ["O2", "CO2", "H2O", "HO2"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id:2,
    title: "Math Quiz",
    description: "Basic mathematics practice",
    image: "https://members.kidpid.com/wp-content/uploads/2023/10/Simple-Maths-Quiz-Book-Cover.png",
    questions: [
      {
        questionText: "What is 12 × 8?",
        options: ["96", "84", "100", "92"],
        correctAnswerIndex: 0
      },
      {
        questionText: "Square root of 144 is?",
        options: ["10", "11", "12", "13"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id:3,
    title: "History Quiz",
    description: "Test your knowledge of world history",
    image: "https://quizquestions.uk/wp-content/uploads/2025/01/a-58.jpg",
    questions: [
      {
        questionText: "Who was the first President of the United States?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        correctAnswerIndex: 0
      },
      {
        questionText: "In which year did World War II end?",
        options: ["1945", "1939", "1918", "1965"],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id:4,
    title: "Geography Quiz",
    description: "Questions on world geography",
    questions: [
      {
        questionText: "Which is the largest continent?",
        options: ["Africa", "Asia", "Europe", "North America"],
        correctAnswerIndex: 1
      },
      {
        questionText: "The Sahara Desert is located in which continent?",
        options: ["South America", "Africa", "Australia", "Asia"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id:5,
    title: "Technology Quiz",
    description: "Basics of computers and technology",
    questions: [
      {
        questionText: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "High Transfer Text Protocol",
          "HyperText Translate Program",
          "Home Transfer Text Path"
        ],
        correctAnswerIndex: 0
      },
      {
        questionText: "Which company developed the iPhone?",
        options: ["Google", "Apple", "Microsoft", "Samsung"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: 6,
    title: "Sports Quiz",
    description: "Trivia based on world sports",
    questions: [
      {
        questionText: "How many players are there in a football (soccer) team on the field?",
        options: ["9", "10", "11", "12"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Brian Lara"],
        correctAnswerIndex: 2
      }
    ]
  }
];



export default function Trivia() {
    return (
        <>
         <div className="bg-gradient-to-r from-[#5830af] to-[#a58cda] min-h-screen p-8">
            <Navbar />
             <div className="flex flex-col justify-center p-4">
                <h1 className="text-6xl font-bold text-white font-sans text-center m-16">Try Hands on Pre-Build Quizzes</h1>

                <div className="grid grid-cols-3 gap-4">
                   {quizzes.map((quiz) => (
                    <QuizCard quiz={quiz} key={quiz.id} />
                   ))}
                </div>
             </div>
         </div>
        </>
    )
}