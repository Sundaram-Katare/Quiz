import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
    try {
        return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
    } catch (error) {
        throw new Error("Error generating token");
    }
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error("Invalid token");
    }
};

export { generateToken, verifyToken };
