import express from 'express';
import { addQuiz, getAllQuiz } from '../controllers/quizController.js';
import  verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/add", verifyToken, addQuiz);
router.get("/", getAllQuiz);

export default router;