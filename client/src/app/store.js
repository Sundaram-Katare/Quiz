import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../feature/quiz/quiz.js';
import authReducer from '../feature/auth/authSlice.js';

export const store = configureStore({
    reducer: {
        quiz: quizReducer,
        auth: authReducer,
    }
});