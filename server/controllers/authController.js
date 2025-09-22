import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../services/jwt.js';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).send("All fields are required.");
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).send("User already exists.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = generateToken(user._id);

        res.status(201).json({
            id: user._id,
            username: user.username,
            email: user.email,
            token,
        });
    } catch (error) {
        res.status(500).send("Error in signup.");
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("All fields are required.");
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found.");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Invalid credentials.");
        }

        const token = generateToken(user._id);

        res.status(200).json({
            id: user._id,
            username: user.username,
            email: user.email,
            token,
            message: "Login successful",
        });
    } catch (error) {
        res.status(500).send("Error in login.");
    }
};
