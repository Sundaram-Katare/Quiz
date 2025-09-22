import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import quizRoutes from './routes/quizRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Quiz backend is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}. ` ));