import Quiz from '../models/quizModel.js';

export const addQuiz = async (req, res) => {
    try {
        const { title, description, questions } = req.body;

        if(!title || !description || !questions ){
            return res.status(401).json("All fields are required. ");
        }

        const quiz = await Quiz.create({
            title,
            description,
            questions,
        });

      return res.status(200).json("Quiz created successfully");
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllQuiz = async (req, res) => {
    try {
        const quizList = await Quiz.find();

        return res.status(200).json(quizList);
    } catch( error) {
        return res.status(500).json({ message: error.message, text: "Error fetching quizzes" });
    }
};