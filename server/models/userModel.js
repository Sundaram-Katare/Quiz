import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "" },
    points: { type: Number, default: 0 },
    quizCreated: { type: Number, default: 0 },
    quizParticipated: { type: Number, default: 0 }
}, { collection: "users" });

export default mongoose.model("User", userSchema);