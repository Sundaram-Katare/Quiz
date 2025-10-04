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
            points: user.points,
            quizParticipated: user.quizParticipated
        });
    } catch (error) {
        res.status(500).send("Error in login.");
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log("users");

        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching users" });
    }
};

export const incrementPoints = async (req, res) => {
    // Get userId from req.user (set by verifyToken middleware)
    const userId = req.user?.id || req.body.userId;

    if (!userId) {
        return res.status(400).json({ message: "User ID missing" });
    }

    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { $inc: { points: 10 } },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ points: user.points, message: "Points incremented successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

// export const getWrongQuestions = async () => {
//     try {
//         const 
//     }
// }

// export const updateWrongQuestionsCount = async (req, res) => {
//     try {
//         const userId = req.user?.id || req.body.userId;

//         if (!userId) {
//     return res.status(400).json({ message: "User ID missing" });
//   }


//     }
// } 

export const incrementQuizParticipated = async (req, res) => {
    const userId = req.user?.id || req.UserId;

    if (!userId) {
        return res.status(400).json({ message: "User Id Missing" });
    }

    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { $inc: { quizParticipated: 1 } },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ quizParticipated: user.quizParticipated, message: "Quiz Participated incremented successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

export const getUserAccuracy = async (req, res) => {
    const userId = req.user?.id || req.userId;

    if (!userId) {
        return res.status(400).json({ message: "UserId is missing" });
    }

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({ message: "User Not found" });
        }

        const points = user.points;
        const quizParticipated = user.quizParticipated;

        const accuracy = (points / (quizParticipated * 20)) * 100;

        return res.status(200).json({ message: "Get Request successful", accuracy: accuracy });
    } catch {
        res.status(500).json({ message: "Server error" });
    }
};

export const setAvatar = async (req, res) => {
  const { avatar } = req.body; // Destructure avatar from req.body
  const userId = req.user?.id || req.userId;

  if (!userId) {
    return res.status(400).json({ message: "UserId is missing" });
  }

  if (!avatar) {
    return res.status(400).json({ message: "Avatar required" });
  }

  try {
    // Update user and return the NEW user document (important: { new: true })
    const user = await User.findByIdAndUpdate(
      userId,
      { avatar: avatar },
      { new: true } // Return updated document
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ avatar: user.avatar, message: "Avatar updated successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAvatar = async (req, res) => {
  const userId = req.user?.id || req.userId;

  if (!userId) {
    return res.status(400).json({ message: "UserId is missing" });
  }

  try {
    const user = await User.findById(userId).select("avatar");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ avatar: user.avatar || "" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPoints = async (req, res) => {
    const userId = req.user?.id || req.userId;

    if (!userId) {
        return res.status(400).json({ message: "UserId is missing" });
    }

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({ message: "User Not found" });
        }

        const points = user.points;

        return res.status(200).json({ message: "Get Request successful", points: points });
    } catch {
        res.status(500).json({ message: "Server error" });
    }
} 