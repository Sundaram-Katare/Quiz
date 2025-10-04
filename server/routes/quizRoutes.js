import express from 'express';
import { addQuiz, getAllQuiz, getQuizByCode } from '../controllers/quizController.js';
import  verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/add", addQuiz);
router.get("/", getAllQuiz);

router.get("/code", getQuizByCode);

export default router;