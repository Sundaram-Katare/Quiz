import express from 'express';
import { signup, login, getAllUsers, incrementPoints, incrementQuizParticipated, getUserAccuracy, setAvatar, getAvatar, getPoints } from '../controllers/authController.js';
import  verifyToken from '../middleware/authMiddleware.js';

const router =  express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.get("/", getAllUsers);

router.put("/points", verifyToken, incrementPoints);
router.put("/quizParticipated", verifyToken, incrementQuizParticipated);

router.get("/accuracy", verifyToken, getUserAccuracy);

router.get("/points", verifyToken, getPoints);

// router.put("/avatar", verifyToken, setAvatar);
// router.get("/avatar", verifyToken, getAvatar);

export default router;